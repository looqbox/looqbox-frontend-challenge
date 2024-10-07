import { Skeleton } from "antd";
import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-block: 3rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;

  max-height: 40rem;
  overflow-y: auto;
`;

export const SkeletonItem = styled(Skeleton.Node)`
  width: 15rem !important;
  height: 13rem !important;
`;
