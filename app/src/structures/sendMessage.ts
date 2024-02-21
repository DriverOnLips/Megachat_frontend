interface SendMessagePayloadStruct {
  data: string;
}

export class SendMessageClass {
  public username: string;
  public time: number;
  public payload: SendMessagePayloadStruct;

  constructor({
    username,
    time,
    payload,
  }: {
    username: string;
    time: number;
    payload: SendMessagePayloadStruct;
  }) {
    this.username = username;
    this.time = time;
    this.payload = payload;
  }
}
