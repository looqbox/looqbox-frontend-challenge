import styled from 'styled-components';
import { Layout } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
    text-align: center;
    height: 150px;
    line-height: 64px;
    background-color: #fff;

    h1 {
        font-weight: 700;
        color: #17171B;
        font-size: 32px;
        margin-bottom: -20px;
    }

    p {
        color: #747476;
    }
`;
