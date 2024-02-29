import { useEffect, useRef } from 'react';

import './Content.css';
import { MessageClass } from '../../structures/message';
import Message from '../UI/message/Message';
import { WebSocketManager } from '../../utils/websocket/webSocket';
import { convertSocketMessage } from '../../structures/convertSocketMessage';
import { ReceiveMessageClass } from '../../structures/receiveMessage';
import { ResponseMessageClass } from '../../structures/responseMessage';
import { useMessage } from '../../hooks/useMessage';

const Content = () => {
	const { messages, addReceivedMessage, updateMessage } = useMessage();
	const messengerHistoryRef = useRef<HTMLDivElement>(null);

	const webSocketManager = new WebSocketManager();

	useEffect(() => {
		webSocketManager.connect('ws://172.16.82.155:8800/ws');

		const handleMessage = (data: any) => {
			const socketMessage = convertSocketMessage(data);

			switch (true) {
				case socketMessage instanceof ReceiveMessageClass: {
					addReceivedMessage(socketMessage);
					console.log('receive');
					break;
				}
				case socketMessage instanceof ResponseMessageClass: {
					updateMessage(socketMessage);
					console.log('responce');
					break;
				}
				default:
					console.log('null');
					break;
			}
		};

		webSocketManager.addListener(handleMessage);

		return () => {
			webSocketManager.removeListener(handleMessage);
			webSocketManager.disconnect();
		};
	}, []);

	useEffect(() => {
		if (messengerHistoryRef.current) {
			messengerHistoryRef.current.scrollTop =
				messengerHistoryRef.current.scrollHeight;
		}
	}, [messages]);

	useEffect(() => {}, [messages]);

	return (
		<main id='main'>
			<div
				id='messenger_history'
				ref={messengerHistoryRef}
			>
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
