import { RefObject, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type Props = {
	captchaRef: RefObject<ReCAPTCHA>;
};

export const useRecaptcha = ({ captchaRef }: Props) => {
	const [isVerified, setIsVerified] = useState(false);

	const handleCaptchaSubmission = async () => {
		try {
			const captchaValue = captchaRef.current?.getValue();

			if (captchaValue && captchaValue.length > 0) {
				await fetch('/api/recaptcha', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ captchaValue }),
				});

				setIsVerified(true);
			}
		} catch (e) {
			setIsVerified(false);
		}
	};

	const handleCaptchaChange = async () => {
		await handleCaptchaSubmission();
	};

	return {
		isVerified,
		handleCaptchaChange,
	};
};
