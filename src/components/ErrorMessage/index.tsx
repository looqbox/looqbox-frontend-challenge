import iconPikachu from '../../assets/image/pikachu.png';
import * as S from './styles';

type Props = {
  message?: string;
};
export const ErrorMessage = ({ message }: Props) => {
  return (
    <S.Container data-testid="error-message">
      <S.ErrorMessage>
        <S.Icon src={iconPikachu} alt="Icon pikachu" />
        <S.Message>{message || 'Ops, pokémon não encontrado!'}</S.Message>
      </S.ErrorMessage>
    </S.Container>
  );
};
