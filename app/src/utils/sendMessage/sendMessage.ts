import { SendMessageClass } from '../../structures/sendMessage';
import { WebSocketManager } from '../websocket/webSocket';

export const sendMessage = (username: string, messageText: string) => {
  const webSockerManager = new WebSocketManager();

  const messageData = {
    username,
    time: new Date().getTime(),
    payload: {
      data: messageText,
    },
  };

  const message = new SendMessageClass(messageData);

  webSockerManager.send(message);
};
