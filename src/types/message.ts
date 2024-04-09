type Message =
  | {
      messageId: number;
      boxId: number;
      createdBy: string;
      tag: MessageTag;
      contents: string;
      createdAt: string;
    }
  | {
      messageId?: undefined;
      boxId?: undefined;
      createdBy?: undefined;
      tag?: undefined;
      contents?: undefined;
      createdAt?: undefined;
    };

type MessageTag = 'health' | 'peace' | 'happiness' | 'love';
export type { Message, MessageTag };
