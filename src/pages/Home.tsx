import React from "react";
//Styles
import { Container } from "./style";
//Components
import Menu from "../components/Menu";
import BannerMain from '../components/BannerMain';
import Carousel from '../components/Carousel';
//data
import data from '../utils/data.json';
import { Category } from '../utils/types';


const Home: React.FC = () => {
  const categories: Category[] = data.categories as Category[];

  return (
    <Container>
      <Menu />
      <BannerMain videoTitle="FUTEBOL TA Ó ESTRALANO" videoDescription="UAU"
      url= "https://www.youtube.com/watch?v=KDsy3_WXXAM"/>
      {categories.map(category => <Carousel key={category.title} ignoreFirstVideo={true} category={category} />)}
    </Container>
  );
};

export default Home;
