import React, { useRef } from 'react';
import {LogoNearSkyInline} from '../../assets/imgs/index.js';
import * as Styled from './style.js';

export function Header({ sobreRef, parceriasRef, sobreNosRef }) {

  // const handleScrollToSobre = () => {
  //   if (sobreRef && sobreRef.current) {
  //     window.scrollTo({
  //       top: sobreRef.current.offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  // const handleScrollToParcerias = () => {
  //   if (parceriasRef && parceriasRef.current) {
  //     window.scrollTo({
  //       top: parceriasRef.current.offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  // const handleScrollToSobreNos = () => {
  //   if (sobreNosRef && sobreNosRef.current) {
  //     window.scrollTo({
  //       top: sobreNosRef.current.offsetTop,
  //       behavior: 'smooth'
  //     });
  //   }
  // };

  return (
    <>
      <Styled.Menu>
        <Styled.Logo src={LogoNearSkyInline}/>
        {/* <Styled.Links>
          <p onClick={handleScrollToSobre}>Sobre</p>
          <p onClick={handleScrollToParcerias}>Parcerias</p>
          <p onClick={handleScrollToSobreNos}>Sobre nós</p>
        </Styled.Links> */}
      </Styled.Menu>
    </>
  );
}
