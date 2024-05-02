import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import notFoundImage from '../../../assets/images/not-found.png';

import './styles.css';

const NotFoundLayout = () => {
	const navigate = useNavigate();
	return (
		<div className="not-found-screen">
			<img src={notFoundImage} alt="Snorlax Sleeping" />
			<h1>Página não encontrada!</h1>
			<p>Não se preocupe! Sinta-se à vontade para explorar nossa pokedex.</p>
			<Button type="primary" onClick={() => navigate('/')}>Voltar para a Home</Button>
		</div>
	);
};

export default NotFoundLayout;