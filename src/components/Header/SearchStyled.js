import styled from 'styled-components';

export const SearchInput = styled.input`
  width: 84%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 22px;
  padding-bottom: 20px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
`;

export const SearchButton = styled.button`
    width: 40px;
    padding-bottom: 4px;
    height: 48px;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;

`;

export const SearchButtonIcon = styled.span`
    position: relative;
    top: 5px;
`;

export default SearchInput;