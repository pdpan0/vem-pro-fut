import React, { useState } from "react";
//Styles
import { Wrapper, Logo } from "./style";
//Images
import LogoSource from "../../assets/logo.png";
//Components
import ButtonLink from "../ButtonLink";
//Utils
import useDocumentScrollThrottled from "../../utils/useDocumentScrollThrottled";

const Menu: React.FC = () => {
  const [shouldShowHeader, setShouldShowHeader] = useState(false);

  useDocumentScrollThrottled((callbackData: any) => {
    const { currentScrollTop } = callbackData;
    setShouldShowHeader(currentScrollTop > 0);
  });

  return (
    <Wrapper isShow={shouldShowHeader}>
      <Logo src={LogoSource} alt="Vem Pro Fut" />
      <ButtonLink to="/" value="Criar Vídeo" />
    </Wrapper>
  );
};

export default Menu;
