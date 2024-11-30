import { UserData } from 'types';
import { create } from 'zustand';

interface UserStore {
  user: UserData | null;
  setUser: (user: UserData) => void;
  clearUser: () => void;
}
const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
