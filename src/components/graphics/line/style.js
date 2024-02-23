import styled from 'styled-components';
import { ResetI } from '../../../assets/icons/index';

export const Flex = styled.div`
  display:flex;
  justify-content:space-between;
`;

export const Text = styled.p`
    fill: var(--text-color);
    font-size: 13px;
    display:flex;
    justify-content: flex-start;
`;

export const Title = styled(Text)`
    display: flex;
    justify-content: flex-start;
    font-size: 18px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:space-between;
`;

export const Icon = styled.div`
    fill: var(--text-color);
    width: 24px;
    height: 24px;
    margin-left: auto;
`;

export const ResetIcon = styled(Icon).attrs({
    as: ResetI,
})``;