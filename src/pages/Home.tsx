import React from "react";
//Styles
import { Container } from "./style";
//Components
import Menu from "../components/Menu";
import BannerMain from '../components/BannerMain';

const Home = () => {
  return (
    <Container>
      <Menu />
      <BannerMain videoTitle="FUTEBOL TA Ó ESTRALANO" videoDescription="UAU"
      url= "https://www.youtube.com/watch?v=KDsy3_WXXAM"/>
    </Container>
  );
};

export default Home;
