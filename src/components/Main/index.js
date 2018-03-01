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
import { Gradient } from './styled';

export default () => (
  <div>
    {/*
      <div style= {{ position: 'fixed', width: '400px', height: '100vh', top: 0, right: 0}} ></div>
      */}
    <Gradient />
    <Row around='xs' style={{ margin: '0 auto', /* maxWidth: '1280px',*/ overflow: 'hidden'}}>
      {/* background: "url(images/device.png) center right -270px / 100% no-repeat" */}
      <Col xs={12} md={8} /* style={{ maxWidth: '860px' }} */>
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
      <Col xs={4} />
    </Row>
    <Footer />
  </div>
);
