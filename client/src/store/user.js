import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const userStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: ({ email, firstName, lastName, token }) =>
        set({
          user: { email, firstName, lastName },
          token,
        }),
      removeUser: () => set({ user: null, token: null }),
      updateUser: (updatedUser) =>
        set((state) => ({ user: { ...state.user, ...updatedUser } })),
    }),
    {
      name: 'user-store',
    }
  )
);
