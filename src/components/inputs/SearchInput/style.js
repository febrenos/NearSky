import styled from 'styled-components';
import { Search, BigSize } from '../../../assets/icons/index';

export const Input = styled.input`
  width: 100%;
  margin: 0 auto; /* Center the input */
  background-color: var(--bg-secondary-color);
  padding: 10px 50px 10px 20px;
  color: var(--text-color);
  border-radius: 32px;
  font-size: 16px;
  position: relative;
  border: 2px solid var(--text-secondary);
  &::placeholder {
    color: var(--txt-primary);
  }

  &:focus,
  &:valid {
    outline: none;
  }
`;

export const ContentSearch = styled.div`
display: flex;
align-items: center;
position: absolute;
margin-top:50px;
flex-direction:column;
background-color: var(--bg-secondary-color);
padding: 10px;
border-radius: 10px;
width:264px;
`

export const ItemSearch = styled.p`
    font-size:17px;
    color: var(--text-color);
    cursor: pointer;
    padding:3px 0;
    border-radius: 5px;
    width:100%;
    &:hover{
      background:var(--bg-secondary-color);
    }
`;

export const ContentIcon = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    width:30px;
    height:30px;
    fill: var(--text-color);
    border-radius:5px;
`;

export const SearchIcon = styled(ContentIcon).attrs({
  as: Search,
})`
`;

export const BigSizeIcon = styled(ContentIcon).attrs({
  as: BigSize,
})`
background-color: ${props => props.isActive ? 'var(--bg-secondary-color)' : 'transparent'};
`;

export const All = styled.div`
  width: 100%;
  display: flex;
  margin-bottom:100px;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
`;

export const BgIcon = styled.div`
  display: flex;
  right: 0;
  align-items: center;
  background-color: var(--bg-secondary);
  padding: 9px 15px 9px 10px;
  position: absolute;
  gap: 5px;
  border-radius: 0 32px 32px 0;

  svg {
    cursor: pointer;
  }
`;
