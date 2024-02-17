import React, { useState, useEffect } from 'react';
import './Message.css';
import { MessageStruct } from '../../../structures/structures';
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

  return (
    <div className='message'>
      <img src={imgData} />
      <span className='message__username'>{message.username}</span>
      <span className='message__time'>{time}</span>
      <span className='message__text'>{message.payload.data}</span>
    </div>
  );
};

export default Message;
