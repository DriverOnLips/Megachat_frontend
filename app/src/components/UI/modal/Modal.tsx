import React from 'react';

import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
          />
          <div className='modal__text-line' />
        </div>
        <div className='modal__controls'>
          <button
            className='modal__controls-cansel text-base2-medium'
            onClick={(event) => {
              onClose();
              event.stopPropagation();
            }}
          >
            Отменить
          </button>
          <button
            className='modal__controls-save text-base2-medium'
            onClick={(event) => {
              onClose();
              event.stopPropagation();
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
