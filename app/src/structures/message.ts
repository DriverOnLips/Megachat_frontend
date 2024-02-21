import { SendMessageClass } from './sendMessage';

interface MessagePayloadStruct {
  data: string;
  status: string;
  fromMe: boolean;
}

export class MessageClass {
  public username: string;
  public time: number;
  public payload: MessagePayloadStruct;

  public constructor({
    username,
    time,
    payload,
  }: {
    username: string;
    time: number;
    payload: MessagePayloadStruct;
  }) {
    this.username = username;
    this.time = time;
    this.payload = payload;
  }

  /**
   * toSendMessageClass
   */
  public toSendMessageClass() {
    return new SendMessageClass({
      username: this.username,
      time: this.time,
      payload: {
        data: this.payload.data,
      },
    });
  }
}
