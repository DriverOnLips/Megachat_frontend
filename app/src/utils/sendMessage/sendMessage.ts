import { MessageStruct } from '../../structures/structures';
import { WebSocketManager } from '../websocket/webSocket';

export const sendMessage = (username: string, messageText: string) => {
  const webSockerManager = new WebSocketManager();

  const message: MessageStruct = {
    username,
    time: new Date().getTime(),
    payload: {
      data: messageText,
      status: '',
      message: '',
      fromMe: true,
    },
  };

  console.log(message);

  webSockerManager.send(message);
};
