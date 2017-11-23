import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'normalize.css';
import Header from './Header/';
import Landing from './MainPage/';
import Footer from './Footer/';
import 'flexboxgrid2/flexboxgrid2.css';
import styled from 'styled-components';

import Homes from './Homes/';

const Content = styled.div`padding-top: 80px;`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Content>
            <Route path="/" exact component={Landing} />
            <Route path="/homes" component={Homes} />
          </Content>

          <Route path="/" exact component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
