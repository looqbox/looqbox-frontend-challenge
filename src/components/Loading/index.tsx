import * as S from './styles';

export const Loading = () => {
  return (
    <S.Container>
      <S.Loading>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </S.Loading>
    </S.Container>
  );
};
