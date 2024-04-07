type Message = {
  messageId: number | undefined;
  boxId: number | undefined;
  createdBy: string | undefined;
  tag: MessageTag;
  contents: string | undefined;
  createdAt: string | undefined;
};

type MessageTag = 'health' | 'peace' | 'happiness' | 'love';
export type { Message, MessageTag };
