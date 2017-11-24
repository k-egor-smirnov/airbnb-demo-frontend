import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'normalize.css';
import Header from './Header/';
import Landing from './MainPage/';
import Footer from './Footer/';
import 'flexboxgrid2/flexboxgrid2.css';
<<<<<<< HEAD
=======
import styled from 'styled-components';
import 'react-dates/lib/css/_datepicker.css';

import Homes from './Homes/';

const Content = styled.div`
  padding-top: 80px;
`;
>>>>>>> 1ce1e02... date mobile is ready

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route path="/" exact component={Landing} />
          <Route path="/homes" component={Landing} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
