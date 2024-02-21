import { ReceiveMessageClass } from './receiveMessage';
import { ResponseMessageClass } from './responseMessage';

export const convertSocketMessage = (
  socketMessage: any
): ReceiveMessageClass | ResponseMessageClass | null => {
  if (
    'data' in socketMessage &&
    'status' in socketMessage &&
    'message' in socketMessage
  ) {
    return new ReceiveMessageClass({
      username: socketMessage.username,
      time: socketMessage.time,
      payload: {
        data: socketMessage.payload.data,
        status: socketMessage.payload.status,
        message: socketMessage.payload.message,
      },
    });
  } else if ('status' in socketMessage && 'message' in socketMessage) {
    return new ResponseMessageClass({
      username: socketMessage.username,
      time: socketMessage.time,
      payload: {
        status: socketMessage.payload.status,
        message: socketMessage.payload.message,
      },
    });
  } else {
    return null;
  }
};
