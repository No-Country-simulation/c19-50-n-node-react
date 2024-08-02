import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: ({ id, email, name, lastName, token, role }) =>
        set({
          user: { id, email, name, lastName, role },
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
