import { create } from 'zustand';

interface ToastState {
  message: string;
  openToast: boolean;
  setToast: (message: string) => void;
  closeToast: () => void;
}

const useToastStore = create<ToastState>((set) => ({
  message: '',
  openToast: false,
  setToast: (message) => set({ message: message, openToast: true }),
  closeToast: () => set({ openToast: false }),
}));

export default useToastStore;
