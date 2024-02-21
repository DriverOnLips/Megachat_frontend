import { useDispatch, useSelector } from 'react-redux';
import {
  AddReceivedMessage,
  AddSendedMessage,
  UpdateMessage,
} from '../stores/MessageStore';
import { ResponseMessageClass } from '../structures/responseMessage';
import { ReceiveMessageClass } from '../structures/receiveMessage';
import { MessageClass } from '../structures/message';

export const useMessage = () => {
  const { messages } = useSelector((store: any) => store.message);

  const dispatch = useDispatch();

  const addReceivedMessage = (message: ReceiveMessageClass) => {
    dispatch(AddReceivedMessage(message));
  };

  const addSendedMessage = (message: MessageClass) => {
    dispatch(AddSendedMessage(message));
  };

  const updateMessage = (message: ResponseMessageClass) => {
    dispatch(UpdateMessage(message));
  };

  return {
    messages,
    addReceivedMessage,
    updateMessage,
    addSendedMessage,
  };
};
