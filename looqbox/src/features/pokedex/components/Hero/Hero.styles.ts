import styled from "styled-components";

export const HeroWrap = styled.section`
  padding: 64px 16px;
  background:
    radial-gradient(1200px 600px at 20% -10%, rgba(111, 79, 242, 0.35), transparent 60%),
    radial-gradient(1000px 500px at 80% 0%, rgba(34, 211, 238, 0.2), transparent 60%);
  text-align: center;
`;

export const HeroContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const BadgesRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  background: #11192a;
  border: 1px solid #223;
  font-size: 12px;
  color: #bfc6ff;
`;
