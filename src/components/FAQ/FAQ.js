import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {listData, faqPage} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={listData.title} splashImage={listData.image}/>
    <h2>{faqPage.headerContentOne}</h2>
    <p>{faqPage.paragraphContent}</p>
    <p>{faqPage.paragraphContent}</p>
    <h2>{faqPage.headerContentTwo}</h2>
    <p>{faqPage.paragraphContent}</p>
    <p>{faqPage.paragraphContent}</p>
    <p>{faqPage.paragraphContent}</p>
  </Container>
);

export default FAQ;