export class WebSocketManager {
  private static instance: WebSocketManager | null = null;
  private socket: WebSocket | null = null;
  private listeners: Array<(data: any) => void> = [];

  public constructor() {
    if (WebSocketManager.instance) {
      return WebSocketManager.instance;
    }

    WebSocketManager.instance = this;
  }

  public connect(url: string): void {
    this.socket = new WebSocket(url);

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.listeners.forEach((listener) => listener(data));
    };
  }

  public addListener(listener: (data: any) => void): void {
    this.listeners.push(listener);
  }

  public removeListener(listener: (data: any) => void): void {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  public send(data: any): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    }
  }

  public disconnect(): void {
    if (this.socket) {
      this.socket.close();
    }
  }
}
