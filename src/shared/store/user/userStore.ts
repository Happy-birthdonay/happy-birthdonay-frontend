'use client';

import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

import { type User } from '@/shared/types/user';

const initialUser = {
  name: undefined,
  birthday: undefined,
  user_id: undefined,
  updated_at: undefined,
  access_token: undefined,
  refresh_token: undefined,
};

interface UserStore {
  user: User;
  actions: {
    setUser: (user: User) => void;
    resetUser: () => void;
  };
}

const userStore: StateCreator<UserStore> = (set) => ({
  user: initialUser,
  actions: {
    setUser: (user: User) => set({ user }),
    resetUser: () => set({ user: initialUser }),
  },
});

const useUserStore = create(devtools(userStore));

export const useUser = () => useUserStore((state) => state.user);
export const useUserActions = () => useUserStore((state) => state.actions);
