import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .slick-slide > div {
    display: block !important;
    width: 100% !important;
  }
  .sc-hvigdm .bEVuVA {
    display: block !important;
  }

  .ant-carousel .slick-dots-bottom {
    margin-bottom: 8px;
  }
`;

export const Slide = styled.div<{ $bg: 'ash' | 'misty' | 'brock' }>`
  width: 100%;
  min-height: 340px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ theme, $bg }) => theme.colors[$bg]};
  color: ${({ theme }) => theme.colors.white};
  padding: 40px 250px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 20px 80px;
  }
`;

export const ContentLeft = styled.div`
  flex: 1;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Image = styled.img`
  display: block;
  max-height: 400px;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-top: -166px;
  @media (max-width: 768px) {
    margin: auto;
    padding: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  line-height: 1.2;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 1.6;
  max-width: 400px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;
