import { useEffect, useState } from 'react';

import './Content.css';
import { MessageClass } from '../../structures/message';
import Message from '../UI/message/Message';
import { WebSocketManager } from '../../utils/websocket/webSocket';
import { convertSocketMessage } from '../../structures/convertSocketMessage';
import { ReceiveMessageClass } from '../../structures/receiveMessage';
import { ResponseMessageClass } from '../../structures/responseMessage';

const Content = () => {
  const [messages, setMessages] = useState<Array<MessageClass>>([]);

  const webSocketManager = new WebSocketManager();

  useEffect(() => {
    webSocketManager.connect('ws://192.168.207.1:8800/ws');

    const handleMessage = (data: any) => {
      const socketMessage = convertSocketMessage(data);

      switch (true) {
        case socketMessage instanceof ReceiveMessageClass: {
          const message = socketMessage.toMessageClass();
          setMessages([...messages, message]);

          break;
        }
        case socketMessage instanceof ResponseMessageClass: {
          const messageToUpdateIndex = messages.findIndex(
            (msg) => msg.time === socketMessage.time
          );
          if (messageToUpdateIndex === -1) return;

          const updatedMessage = socketMessage.toMessageClass(
            messages[messageToUpdateIndex].payload.data
          );

          setMessages([
            ...messages.slice(0, messageToUpdateIndex),
            updatedMessage,
            ...messages.slice(messageToUpdateIndex + 1),
          ]);

          break;
        }
        default:
          break;
      }
    };

    webSocketManager.addListener(handleMessage);

    return () => {
      webSocketManager.removeListener(handleMessage);
      webSocketManager.disconnect();
    };
  }, []);

  return (
    <main id='main'>
      <div id='messenger_history'>
        {messages.map((message: MessageClass, index: number) => (
          <Message
            key={index}
            message={message}
          />
        ))}
      </div>
    </main>
  );
};

export default Content;
