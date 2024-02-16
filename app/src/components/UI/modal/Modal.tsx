import React, { useEffect, useState } from 'react';

import './Modal.css';
import { useApp } from '../../../hooks/useApp';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const { username, setUsername } = useApp();

  const [usernameInput, setUsernameInput] = useState<string>(username);

  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      id='modal'
      onClick={onClose}
    >
      <div
        className='modal_content'
        onClick={(event) => event.stopPropagation()}
      >
        <span className='modal__title text-base1-bold'>
          Введите имя пользователя
        </span>
        <div className='modal__text'>
          <input
            className='modal__text-input text-base1-medium'
            placeholder={'Username'}
            value={usernameInput}
            onChange={(event) => setUsernameInput(event.target.value)}
          />
          <div className='modal__text-line' />
        </div>
        <div className='modal__controls'>
          <button
            className='modal__controls-cansel text-base2-medium'
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
          >
            Отменить
          </button>
          <button
            className='modal__controls-save text-base2-medium'
            onClick={(event) => {
              event.stopPropagation();
              setUsername(usernameInput);
              onClose();
            }}
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
