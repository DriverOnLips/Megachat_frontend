import { MessageClass } from './message';

interface ResponseMessagePayloadStruct {
  status: string;
  message: string;
}

export class ResponseMessageClass {
  public username: string;
  public time: number;
  public payload: ResponseMessagePayloadStruct;

  public constructor({
    username,
    time,
    payload,
  }: {
    username: string;
    time: number;
    payload: ResponseMessagePayloadStruct;
  }) {
    this.username = username;
    this.time = time;
    this.payload = payload;
  }

  /**
   * toMessageClass
   */
  public toMessageClass(data: string) {
    return new MessageClass({
      username: this.username,
      time: this.time,
      payload: {
        data: this.payload.status === 'ok' ? data : this.payload.message,
        status: this.payload.status,
        fromMe: true,
      },
    });
  }
}
