import { MessageClass } from './message';

interface ReceiveMessagePayloadStruct {
  data: string;
  status: string;
  message: string;
}

export class ReceiveMessageClass {
  public username: string;
  public time: number;
  public payload: ReceiveMessagePayloadStruct;

  public constructor({
    username,
    time,
    payload,
  }: {
    username: string;
    time: number;
    payload: ReceiveMessagePayloadStruct;
  }) {
    this.username = username;
    this.time = time;
    this.payload = payload;
  }

  /**
   * toMessageClass
   */
  public toMessageClass() {
    return new MessageClass({
      username: this.username,
      time: this.time,
      payload: {
        data:
          this.payload.status === 'ok'
            ? this.payload.data
            : this.payload.message,
        status: this.payload.status,
        fromMe: false,
      },
    });
  }
}
