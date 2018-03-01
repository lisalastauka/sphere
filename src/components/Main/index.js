import React from 'react';
import { Row , Col } from 'react-flexbox-grid';
import TopBar from './../TopBar';
import Header from './../Header';
import Slides from './../Slides';
import AboutCard from './../AboutCard';
import Window from './../Window';
import Promo from './../Promo';
import Document from './../Document';
import Conditions from './../Conditions';
import Tarifs from './../Tarifs';
import Footer from './../Footer';
import SideBar from './../SideBar';
import { Gradient } from './styled';

export default () => (
  <div>
    <SideBar />
    <Gradient />
    <Row around='xs' style={{ margin: '0 auto', maxWidth: '1280px', overflow: 'hidden'}}>
      <Col xs={12} lg={9} style={{ padding: '0 84px' }}>
        <TopBar />
        <Header />
        <Promo />
        <AboutCard />
        <Slides />
        <Window />
        <Document />
        <Conditions />
        <Tarifs />
      </Col>
      <Col lg={3} />
    </Row>
    <Footer />
  </div>
);
