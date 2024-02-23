import styled from 'styled-components';
import { Sun, Moon, Star } from '../../../../assets/imgs/index';
import { SunnyI, CloudySunI, MoonyI, CloudyMoonI, RainyI, FoggyI, SnowyI, RainyMixI, StormI, ArrowUpI, CloseI } from '../../../../assets/icons/index';


export const Card = styled.div`
    max-width: 300px;
    width:100%;
    height: fit-content;
    padding: 10px;
    border-radius: 20px;
    box-shadow: var(--box-shadow);
    gap:10px;
    align-items: center;
    flex-direction:column;
    gap:25px;
    display:${props=> (props.isDisplayNone ? 'none' :'flex')};
    padding: ${props => (props.isShowMore ? '12px 20px 40px 20px' : '12px 20px')};
    background: ${props => {
        switch (props.weatherType) {
            case 'sunny':
                return 'linear-gradient(130deg, #df9826 0%, #e6a53c 100%)';
            case 'cloudySun':
                return 'linear-gradient(130deg, #df9826 0%, #e6a53c 100%)';
            case 'moony':
                return 'linear-gradient(130deg, #00355E 0%, #0a44b0 100%);';
            case 'cloudyMoon':
                return 'linear-gradient(130deg, #00355E 0%, #0a44b0 100%);';
            case 'rainy':
                return 'linear-gradient(130deg, #153b9c 0%, #4a75e2 100%);';
            case 'foggy':
                return 'linear-gradient(to bottom right, #58b74e, #4fc8d4);';
            case 'snow':
                return 'linear-gradient(130deg, #9ac4d6 0%, #83c4e0 100%);';
            case 'storm':
                return 'linear-gradient(130deg, #106aaf 0%, #013257 100%);';
            case 'rainyMix':
                return 'linear-gradient(130deg, #54aaec 0%, #0a68b0 100%);';
            default:
                return '#eda635';
        }
    }};
    --selected-day-color: var(--bg-secondary-color);
    --hover-day-color: var(--bg-secondary-color);
`;

export const Text = styled.p`
    fill: var(--text-color);
    font-size: 18px;
`;

export const PlaceName = styled(Text)`
    font-size: 25px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;


export const SunSvg = styled(Sun)`
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
    width:100%;
`;

export const ContentIcon = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    width:34px;
    height:34px;
`;

export const ContentClose = styled(ContentIcon)`
&:hover svg{
    color: var(--danger-color);
    transition:.7s;
    transform:rotate(180deg);
  }
`;

export const ContentIconBefore = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items:center;
    width: 100%;
    height: 100%;
`;

export const ContentIconAfter = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:center;
    width: 100%;
    height: 100%;
`;

export const Icon = styled.div`
    fill: var(--text-color);
    width: 24px;
    height: 24px;
`;

export const SunnyIcon = styled(Icon).attrs({
    as: SunnyI,
})``;

export const CloudySunIcon = styled(Icon).attrs({
    as: CloudySunI,
})``;

export const MoonyIcon = styled(Icon).attrs({
    as: MoonyI,
})``;

export const CloudyMoonIcon = styled(Icon).attrs({
    as: CloudySunI,
})``;

export const RainyIcon = styled(Icon).attrs({
    as: RainyI,
})``;

export const FoggyIcon = styled(Icon).attrs({
    as: FoggyI,
})``;

export const SnowyIcon = styled(Icon).attrs({
    as: SnowyI,
})``;

export const RainyMixIcon = styled(Icon).attrs({
    as: RainyMixI,
})``;

export const StormIcon = styled(Icon).attrs({
    as: StormI,
})``;

export const BeforeText = styled(Text)`
    display:flex;
    justify-content: flex-end;
`;

export const ArrowUpIcon = styled(ArrowUpI)`
    fill: var(--text-color);
    width: 40px;
    height: 40px;
    transition: transform 0.8s ease 0.3s; /* delay de de 0.3 */
    transform: rotate(${props => (props.isShowMore ? '180deg' : '0deg')});
`;

export const CloseIcon = styled(CloseI)`
    fill: var(--text-color);
    width: 40px;
`;


export const Flex = styled.div`
    display: flex;
    align-items: center;
    gap:2px;
`;

export const FlexIcon = styled(Flex)`

`;

export const FlexTitle = styled(Flex)`
    justify-content: space-between;
    width:100%;
`;

export const Temperature = styled.div`
    display: flex;
    justify-content: center;
    gap:7px;
`;

export const Description = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`;

export const Day = styled.div`
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap:20px;
    background-color: ${props => (props.isSelected ? 'var(--bg-select-color)' : 'transparent')};
    border-radius:10px;
    cursor:pointer;

    &:hover {
        background-color: ${props => (props.isSelected ? 'var(--bg-select-color)' : 'var(--bg-hover-color)')};
    }
`;

export const ContentDay = styled.div`
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
`;

export const Before = styled.div`
    width:33.33%;
    display:flex;
    font-size:13px;
    justify-content:flex-end;
    flex-direction:column;
`;

export const After = styled.div`
    width:33.33%;
    display:flex;
    font-size:13px;
    justify-content:flex-start;
    flex-direction:column;
`;

export const Temp = styled.p`
    color: #fcffff;
    width:33.33%;
    font-size:40px;
    font-weight:600;
`;

export const AfterText = styled(Text)`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-self: flex-end;
`;

export const GraphicTitle = styled(Text)`
  font-size:14px;
`;