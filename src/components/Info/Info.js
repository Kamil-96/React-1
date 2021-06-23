import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, infoPage} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} splashImage={listData.image}/>
    <h2>{infoPage.headerContent}</h2>
    <p>{infoPage.paragraphContent}</p>
    <p>{infoPage.paragraphContent}</p>
    <p>{infoPage.paragraphContent}</p>
  </Container>
);

export default Info;