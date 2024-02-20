import React, { useState, useEffect } from 'react';
import './Message.css';
import { SendMessageStruct } from '../../../structures/structures';
import { createImageWithInitials } from '../../../utils/generateAvatar/generateAvatar';

const Message: React.FC<{ message: MessageStruct }> = ({ message }) => {
	const [imgData, setImgData] = useState('');
	const [time, setTime] = useState('');

	useEffect(() => {
		const formattedTime = new Date(message.time).toTimeString().split(' ')[0];
		const imageData = createImageWithInitials(...message.username.split(' '));

		setImgData(imageData);
		setTime(formattedTime);
	}, []);

	if (message.payload.fromMe)
		return (
			<div className='message message-from_me'>
				<div className='message__shape'>
					<div className='message__content-me'>
						<span className='message__username text-base3-bold'>
							{message.username}
						</span>
						<span className='message__text text-base2-medium'>
							{message.payload.data}
						</span>
						<div className='message__meta'>
							<span className='message__time text-base3-medium'>{time}</span>
							<img
								className='message__status'
								src={
									message.payload.status === 'ok'
										? './src/assets/img/message_status_ok.svg'
										: message.payload.status === 'error'
										? './src/assets/img/message_status_error.svg'
										: './src/assets/img/message_status_wait.svg'
								}
							/>
						</div>
					</div>
					<div className='message__arrow'>
						<svg
							width='6'
							height='44'
							viewBox='0 0 6 44'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M0 34C0 37.2143 1.76471 41.6786 5.29412 42.5714C5.29412 42.5714 6 42.5714 6 43.2857C6 44 5.29412 44 5.29412 44L0 44V34Z'
								fill='#EFFEDD'
							/>
						</svg>
					</div>
				</div>
				<div className='message__avatar'>
					<img src={imgData} />
				</div>
			</div>
		);

	return (
		<div className='message message-from_user'>
			<div className='message__avatar'>
				<img src={imgData} />
			</div>
			<div className='message__shape'>
				<div className='message__arrow'>
					<svg
						width='6'
						height='44'
						viewBox='0 0 6 44'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M6 34C6 37.2143 4.23529 41.6786 0.705882 42.5714C0.705882 42.5714 0 42.5714 0 43.2857C0 44 0.705882 44 0.705882 44L6 44V34Z'
							fill='white'
						/>
					</svg>
				</div>
				<div className='message__content-user'>
					<span className='message__username text-base3-bold'>
						{message.username}
					</span>
					<span className='message__text text-base2-medium'>
						{message.payload.data}
					</span>
					<div className='message__meta'>
						<span className='message__time text-base3-medium'>{time}</span>
						<img
							className='message__status'
							src={
								message.payload.status === 'ok'
									? './src/assets/img/message_status_ok.svg'
									: message.payload.status === 'error'
									? './src/assets/img/message_status_error.svg'
									: './src/assets/img/message_status_wait.svg'
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;
