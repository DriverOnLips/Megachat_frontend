import { useEffect, useState } from 'react';

import './Content.css';
import { MessageStruct } from '../../structures/structures';
import Message from '../UI/message/Message';
import { WebSocketManager } from '../../utils/websocket/webSocket';

const Content = () => {
  const [messages, setMessages] = useState<Array<MessageStruct>>([]);

  const webSocketManager = new WebSocketManager();

  useEffect(() => {
    webSocketManager.connect('ws://');

    const handleMessage = (data: MessageStruct) => {
      setMessages([...messages, data]);
    };

    webSocketManager.addListener(handleMessage);

    return () => {
      webSocketManager.removeListener(handleMessage);
      webSocketManager.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const message: MessageStruct = {
      username: 'Romanlock',
      time: new Date().getTime(),
      payload: {
        data: 'ПриветПриветПриветПриветПриветПриветПривет',
        status: 'ok',
        message: '',
        fromMe: Boolean(Math.round(Math.random())),
      },
    };

    webSocketManager.send(message);
  };

  return (
    <main id='main'>
      <button onClick={sendMessage} />
      <div id='messenger_history'>
        {messages.map((message: MessageStruct, index: number) => (
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
