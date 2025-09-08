import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Result
      status="404"
      title="Página não encontrada"
      subTitle="Oops! A página que você tentou acessar não existe."
      extra={
        <Link to="/">
          <Button type="primary">Voltar para a Home</Button>
        </Link>
      }
    />
  );
};

export default NotFound;
