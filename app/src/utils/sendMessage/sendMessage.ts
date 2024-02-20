import { SendMessageStruct } from '../../structures/structures';
import { WebSocketManager } from '../websocket/webSocket';

export const sendMessage = (username: string, messageText: string) => {
	const webSockerManager = new WebSocketManager();

	const message: SendMessageStruct = {
		username,
		time: new Date().getTime(),
		payload: {
			data: messageText,
		},
	};

	console.log(message);

	webSockerManager.send(message);
};
