import { MessageClass } from '../../structures/message';
import { WebSocketManager } from '../websocket/webSocket';

export const sendMessage = (message: MessageClass) => {
  const webSockerManager = new WebSocketManager();

  webSockerManager.send(message.toSendMessageClass());
};
