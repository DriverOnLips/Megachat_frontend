interface MessagePayloadStruct {
  data: string;
  status: string;
  message: string;
  fromMe: boolean;
}

export interface MessageStruct {
  username: string;
  time: number;
  payload: MessagePayloadStruct;
}
