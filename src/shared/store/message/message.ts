import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { type Message } from '@/shared/types/message';

const initialMessage = {
  messageId: undefined,
  boxId: undefined,
  createdBy: undefined,
  tag: undefined,
  contents: undefined,
  createdAt: undefined,
};

interface MessageStore {
  message: Message;
  actions: {
    setMessage: (message: Message) => void;
    resetMessage: () => void;
  };
}

const messageStore: StateCreator<MessageStore> = (set) => ({
  message: initialMessage,
  actions: {
    setMessage: (message: Message) => set({ message }),
    resetMessage: () => set({ message: initialMessage }),
  },
});

const useMessageStore = create(devtools(messageStore));

export const useMessage = () => useMessageStore((state) => state.message);
export const useMessageActions = () => useMessageStore((state) => state.actions);
