import React from 'react';
//Styles
import { Wrapper, Logo } from './style';
//Images
import LogoSource from '../../assets/logo.png';
//Components
import ButtonLink from '../ButtonLink';

const Menu = () => (
  <Wrapper>
    <Logo src={LogoSource} alt="Vem Pro Fut" />
    <ButtonLink to="/" value="Criar Vídeo"/>
  </Wrapper>
);

export default Menu;