import axios from 'axios';

const useAxios = () => {

	let headers: any = {
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, sessao, Authorization',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'POST, PUT, GET, PATCH, DELETE, OPTIONS',
		'Content-Type': 'application/json'
	};

	const axiosInstance = axios.create({
		baseURL: 'http://localhost:3000',
		headers
	});

	axiosInstance.interceptors.request.use(async config => {
		try {
			return config;
		} catch (error) {
			return Promise.reject(error);
		}
	});
	return axiosInstance;
};

export default useAxios;