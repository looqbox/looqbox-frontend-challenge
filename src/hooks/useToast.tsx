import { toast } from 'react-toastify';

import { IToastProps } from '../types';

const useToast = () => {
	const showToast = (props: IToastProps) => {
		const {
			toastId,
			type = 'default',
			autoClose,
		} = props;

		toast(toastId, {
			type,
			autoClose,
		});
	};

	return {
		showToast,
	};
};

export default useToast;