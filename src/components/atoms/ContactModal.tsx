import React from 'react';
import { ContactForm, Modal } from '@/components/atoms/index';
import { useModalStore } from '@/stores';

const ContactModal = () => {
	const { showContactForm, closeContactForm } = useModalStore();

	return (
		<Modal isOpen={showContactForm} onClose={() => closeContactForm()}>
			<div className="p-8 bg-background-white rounded-lg shadow-xl">
				<h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
					Contactez-moi
				</h2>
				<ContactForm />
			</div>
		</Modal>
	);
};

export default ContactModal;
