import { TypeOptions, toast } from 'react-toastify';

import { IAPIOptions, TAxiosResponse } from '../types';

import useAxios from './useAxios';
import useToast from './useToast';

interface IFeedBackHandlerParams {
	label: string;
	message: string;
	toastId: string;
	type: TypeOptions;
	autoClose?: number | false | undefined;
	showFeedback?: boolean;
}

interface IErrorHandlerParams {
	error: any;
	label: string;
	showErrorFeedback?: boolean;
	message: string;	
	autoClose?: number | false | undefined; 
}

const useAPI = <T>(endpoint: string) => {
	const axiosInstance = useAxios();
	const { showToast } = useToast();

	const feedbackHandler = (params: IFeedBackHandlerParams) => {
		const { showFeedback = true, ...toastParams } = params;
		if(showFeedback){
			toast.dismiss();
			showToast({ ...toastParams });
		}
	};

	const errorHandler = (params: IErrorHandlerParams) => {
		const { 
			label, 
			error,
			message: errorMessage,
			showErrorFeedback = true,
		} = params;

		const autoClose = false;

		if(!navigator.onLine){
			return showToast({
				label: 'Sem conexão!',
				message: 'Parece que voce está offiline, verifique sua conexão com a internet e tente novamente!',
				toastId: 'error-offline-toast',
				type: 'warning',
				autoClose
			});
		}		

		if( error?.response?.status >= 500 || error?.code === 'ERR_NETWORK' ){
			return feedbackHandler({
				label,
				message: error?.response?.data?.message || 'Falha na comunicação com o servidor, por favor, tente novamente mais tarde.',
				toastId: 'error-load-toast',
				type: 'error',
				autoClose,
				showFeedback: showErrorFeedback
			});
		}

		if (error?.response?.status === 401) {
			localStorage.clear();
			feedbackHandler({
				label,
				message: 'Sessão expirada, por favor, faça login novamente.',
				toastId: 'error-load-toast',
				type: 'error',
				autoClose,
				showFeedback: showErrorFeedback
			});
			return setTimeout(() => window.location.reload(), 2000);
		}
		
		if (error?.response?.status > 300) {
			const requestMessage = error?.response?.data?.message || `${ errorMessage } (${ error.response.status })`;
			return feedbackHandler({
				label,
				message: requestMessage,
				toastId: 'error-load-toast',
				type: 'error',
				autoClose,
				showFeedback: showErrorFeedback
			});
		}
	};

	const get = async(options: IAPIOptions) => {
		const { 
			errorMessage,
			showErrorFeedback,
			successMessage,
			showSuccessFeedback = false,
			label,
			autoClose,
			endpointIdentificator
		} = options;

		try {
			const resp = await axiosInstance.get<TAxiosResponse<T>>(`${ endpoint }${ endpointIdentificator || '' }`);
			feedbackHandler({
				label,
				message: successMessage || resp.data.message ||  `${ label.charAt(0).toUpperCase() + label.slice(1) } carregado com sucesso!`,
				toastId: 'success-get-toast',
				type: 'success',
				autoClose,
				showFeedback: showSuccessFeedback
			});
			return resp.data;
		} catch (error: any) {
			errorHandler({
				error,
				label,
				showErrorFeedback,
				message: errorMessage || `Erro ao carregar ${ label.toLocaleLowerCase() }!`,
			});
		}
	};

	return {
		get,
	};
};

export default useAPI;