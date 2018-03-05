import React from 'react';
import { Col } from 'react-flexbox-grid';
import Appear from '../Appear';
import TopBar from '../TopBar';
import Header from '../Header';
import Slides from '../Slides';
import AboutCard from '../AboutCard';
import Accounts from '../Accounts';
import Promo from '../Promo';
import Document from '../Document';
import Conditions from '../Conditions';
import Tarifs from '../Tarifs';
import Footer from '../Footer';
import SideBar from '../SideBar';
import { Gradient, Container, Center, FullScreen } from './styled';

export default () => (
  <div style={{overflow: 'hidden'}}>
    <SideBar />
    <Appear className='progress'>
      <Gradient />
    </Appear>
    <Container around='xs'>
      <Col xs={12} lg={8}>
        <FullScreen>
          <TopBar />
          <Center>
            <Header />
            <Promo />
          </Center>
        </FullScreen>
        <AboutCard />
        <Slides />
        <Accounts />
        <Document />
        <Conditions />
        <Tarifs />
      </Col>
      <Col lg={3} />
    </Container>
    <Footer />
  </div>
);
