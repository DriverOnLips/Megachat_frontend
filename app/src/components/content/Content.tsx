import { useEffect, useState } from 'react';

import './Content.css';
import { MessageStruct } from '../../structures/structures';
import Message from '../UI/message/Message';

const Content = () => {
  const [messages, setMessages] = useState<Array<MessageStruct>>([]);

  const addMessage = () => {
    const message: MessageStruct = {
      username: 'Romanlock',
      time: new Date().getTime(),
      payload: {
        data: 'Привет',
        status: 'ok',
        message: '',
      },
    };
    setMessages([...messages, message]);
  };

  useEffect(() => {}, [messages]);

  return (
    <main id='main'>
      <button onClick={addMessage} />
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
