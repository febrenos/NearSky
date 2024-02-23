import styled, { keyframes, css } from "styled-components"
import { Sun, Moon, Star, Cloud, Fog, FogLarge, Snowflake, Thunder, WaterDrop, Ice } from '../../../../assets/imgs/index';

export const IllustrationCard = styled.div`
    width:100%;
    height: 100px;
`

export const Content = styled.div`
    width:100%;
    position: relative;
    display:flex;
    justify-content:center;
    align-items:center;
` 

export const SvgBase = styled.div`
  position: absolute;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
  width: auto;
  z-index: ${props => props.z || '9999'};
  height: ${props => props.size || '20px'};
  opacity: ${props => props.opacity ? `0.${props.opacity}` : '1'};
  transform: translate(${props => props.x || '0'}, ${props => props.y || '0'});
  animation: ${props => {
      switch (props.animation) {
          case 'float':
              const float = keyframes`
                50% {
                  transform: translate(
                    ${props.x ? `${props.x}` : '0'}, 
                    ${props.y ? `calc(${props.y} + 5px)` : '0'}
                  );
                }
              `;
              return css`${float} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite ${props => props.delay ?`${props.delay}` : 0}s`;
          case 'slide':
              const slide = keyframes`
                50% {
                  transform: translate(
                    ${props.x ? `calc(${props.x} + 8px)` : '0'}, 
                    ${props.y ? `${props.y}` : '0'}
                  );
                }
              `;
              return css`${slide} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite ${props => props.delay ?`${props.delay}` : 0}s`;
          case 'floatSlide':
           const floatSlide = keyframes`
             50% {
               transform: translate(
                 ${props.x ? `calc(${props.x} + 8px)` : '0'}, 
                 ${props.y ? `calc(${props.y} + 5px)` : '0'} 
               );
             }
           `;
              return css`${floatSlide} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite ${props => props.delay ?`${props.delay}` : 0}s`;
          case 'blink':
              const blink = keyframes`
                50% {
                  opacity: .7;
                }
              `;
              return css`${blink} 4s cubic-bezier(0.11,-0.23, 1, 1.18) infinite ${props => props.delay ?`${props.delay}` : 0}s`;
          default:
              return 'none';
      }
  }};
`;

export const MoonSvg = styled(SvgBase).attrs({
        as: Moon,
    })`
`;

export const SunSvg = styled(SvgBase).attrs({
    as: Sun,
})`
`;

export const StarSvg = styled(SvgBase).attrs({
    as: Star,
})`
`;

export const CloudSvg = styled(SvgBase).attrs({
  as: Cloud,
})`
`;

export const FogSvg = styled(SvgBase).attrs({
  as: Fog,
})`
`;

export const FogLargeSvg = styled(SvgBase).attrs({
  as: FogLarge,
})`
`;

export const ThunderSvg = styled(SvgBase).attrs({
  as: Thunder,
})`
`;

export const WaterDropSvg = styled(SvgBase).attrs({
  as: WaterDrop,
})`
`;

export const SnowflakeSvg = styled(SvgBase).attrs({
  as: Snowflake,
})`
`;

export const IceSvg = styled(SvgBase).attrs({
  as: Ice,
})`
`;

// export const SnowflakeSvg = styled(Snowflake)`
//     filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
//     width:auto;
// `;

// export const ThunderSvg = styled(Thunder)`
//     filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
//     width:auto;
// `;

// export const WaterDropSvg = styled(WaterDrop)`
//     filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
//     width:auto;
// `;