import { Flex, Image, Typography } from 'antd';
import { Link } from 'react-router-dom';
import SadPikachu from '../assets/sad_pikachu.jpg';

type ErrorMessageProps = {
  errorMessage?: string | null;
  directionsMessage?: string;
  linkBack?: boolean;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage, linkBack = false, directionsMessage }) => {
  return (
    <Flex justify="center" align="center" vertical style={{ paddingTop: 16 }}>
      <Typography.Title level={1} style={{ margin: 0, color: '#121212', textAlign: 'center' }}>
        Ops! {errorMessage ? `${errorMessage}.` : ''}
        <br />
        {directionsMessage}
      </Typography.Title>

      <Image src={SadPikachu} alt="Sad Pikachu" preview={false} width={300} />

      {linkBack && (
        <Link to="/home" style={{ textDecoration: 'underline' }}>
          Back to Home
        </Link>
      )}
    </Flex>
  );
};

export default ErrorMessage;
