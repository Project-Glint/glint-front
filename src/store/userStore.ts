import { UserData } from 'types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  user: UserData | null;
  setUser: (user: UserData) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (userData) => set({ user: userData }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: 'user-store', // localStorage 키 이름
      partialize: (state) => ({ user: state.user }), // 필요한 데이터만 저장
    }
  )
);

export default useUserStore;
