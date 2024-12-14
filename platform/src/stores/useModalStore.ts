import { create } from 'zustand';

interface ModalState {
	showContactForm: boolean;
	openContactForm: () => void;
	closeContactForm: () => void;
}

const useModalStore = create<ModalState>((set) => ({
	showContactForm: false,
	openContactForm: () => set({ showContactForm: true }),
	closeContactForm: () => set({ showContactForm: false }),
}));

export default useModalStore;
