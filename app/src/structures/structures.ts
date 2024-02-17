interface MessagePayloadStruct {
  data: string;
  status: string;
  message: string;
}

export interface MessageStruct {
  username: string;
  time: number;
  payload: MessagePayloadStruct;
}
