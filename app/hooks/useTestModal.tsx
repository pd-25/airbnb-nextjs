import { create } from "zustand";

interface TestUpModalStore {
    isOpen: Boolean;
    open: () => void;
    close: () => void;
}

const useTestModal = create<TestUpModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useTestModal;