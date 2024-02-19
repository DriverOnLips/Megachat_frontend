import { useEffect, useState } from 'react';

import './Footer.css';
import { sendMessage } from '../../utils/sendMessage/sendMessage';
import Modal from '../UI/modal/Modal';
import { useApp } from '../../hooks/useApp';

const Footer = () => {
  const { username } = useApp();

  const [messageText, setMessageText] = useState<string>('');
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const sendMessageHandler = () => {
    if (!messageText) return;

    if (!username) {
      setModalOpen(true);
      return;
    }

    sendMessage(username, messageText);
    setMessageText('');
  };

  useEffect(() => {}, [messageText, isModalOpen]);

  const handleInputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key != 'Enter' || !messageText) return;

    if (!username) {
      setModalOpen(true);
      return;
    }

    sendMessage(username, messageText);
    setMessageText('');
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <footer id='footer'>
        <div className='footer__left'>
          <img
            src={
              username
                ? './src/assets/img/username_done.svg'
                : './src/assets/img/no_username.svg'
            }
            className='footer__user-img'
            onClick={() => setModalOpen(true)}
          />
          <div className='footer__text'>
            <input
              className='footer__text-input'
              placeholder={'Сообщение'}
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
              onKeyDown={(event) => handleInputEnter(event)}
            />
            <div className='footer__text-line' />
          </div>
        </div>
        <div className='footer__right'>
          <img
            src={
              messageText
                ? './src/assets/img/send_message.svg'
                : './src/assets/img/send_message-no_text.svg'
            }
            className='footer__send_message-img'
            onClick={sendMessageHandler}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
