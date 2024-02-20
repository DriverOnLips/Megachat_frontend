interface ReceiveMessagePayloadStruct {
	data: string;
	status: string;
	message: string;
}

export interface ReceiveMessageStruct {
	username: string;
	time: number;
	payload: ReceiveMessagePayloadStruct;
}

interface SendMessagePayloadStruct {
	data: string;
}

export interface SendMessageStruct {
	username: string;
	time: number;
	payload: SendMessagePayloadStruct;
}

export const isReceiveMessageStruct = (
	data: any
): data is ReceiveMessageStruct => {
	return (
		typeof data === 'object' &&
		'username' in data &&
		'time' in data &&
		'payload' in data &&
		typeof data.payload === 'object' &&
		'data' in data.payload &&
		'status' in data.payload &&
		'message' in data.payload &&
		'fromMe' in data.payload
	);
};

export const isSendMessageStruct = (data: any): data is SendMessageStruct => {
	return (
		typeof data === 'object' &&
		'username' in data &&
		'time' in data &&
		'payload' in data &&
		typeof data.payload === 'object' &&
		'data' in data.payload
	);
};
