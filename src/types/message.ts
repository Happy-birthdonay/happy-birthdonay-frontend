type Message = {
  messageId: number;
  boxId: number;
  createdBy: string;
  tag: MessageTag;
  contents: string;
  createdAt: string;
};

type MessageTag = 'health' | 'peace' | 'happiness' | 'love';
export type { Message, MessageTag };
