import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MessageClass } from '../structures/message';
import { ResponseMessageClass } from '../structures/responseMessage';
import { ReceiveMessageClass } from '../structures/receiveMessage';

interface MessageState {
  messages: MessageClass[];
}

const initialState: MessageState = {
  messages: [],
};

export const MessageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    AddReceivedMessage: (state, action: PayloadAction<ReceiveMessageClass>) => {
      state.messages.push(action.payload.toMessageClass());
    },
    AddSendedMessage: (state, action: PayloadAction<MessageClass>) => {
      state.messages.push(action.payload);
    },
    UpdateMessage: (state, action: PayloadAction<ResponseMessageClass>) => {
      const messageToUpdateIndex = state.messages.findIndex(
        (msg) => msg.time === action.payload.time
      );
      if (messageToUpdateIndex === -1) return;

      const updatedMessage = action.payload.toMessageClass(
        state.messages[messageToUpdateIndex].payload.data
      );

      state.messages = [
        ...state.messages.slice(0, messageToUpdateIndex),
        updatedMessage,
        ...state.messages.slice(messageToUpdateIndex + 1),
      ];
    },
  },
});

export const messageReducer = MessageSlice.reducer;
export const { AddReceivedMessage, AddSendedMessage, UpdateMessage } =
  MessageSlice.actions;
