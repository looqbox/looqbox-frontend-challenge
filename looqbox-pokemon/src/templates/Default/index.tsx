import * as S from "./styles"

interface IDefaultTemplate {
  children: React.ReactNode
}

const DefaultTemplate = ({ children }: IDefaultTemplate) => {
  return (
    <S.Background>
      <S.Content>
        {children}
      </S.Content>
    </S.Background>
  );
};

export default DefaultTemplate;
