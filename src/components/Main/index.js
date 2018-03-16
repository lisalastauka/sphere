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
import Loader from '../Loader';
import BottomBar from '../BottomBar';
import Menu from '../Menu';
import { toggleBodyOverflow } from '../../utils/helpers';
import { Gradient, Container, Center, FullScreen } from './styled';

export default class Main extends React.Component {
  state = {
    open: false,
  };

  componentDidUpdate(prevProps, prevState){
    if (this.state.open !== prevState.open) {
      toggleBodyOverflow();
    }
  }

  toggle = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  }

  render () {
    return (
      <div style={{overflow: 'hidden'}}>
        <SideBar />
        <Menu open={this.state.open} toggle={this.toggle} />
        <Appear className='progress'>
          <Gradient />
        </Appear>
        <Container around='xs'>
          <Col xs={12} lg={8}>
            <FullScreen>
              <TopBar open={this.state.open} toggle={this.toggle} />
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
            <BottomBar />
          </Col>
          <Col lg={3} />
        </Container>
        <Footer />
      </div>
    );
  }
}
