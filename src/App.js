import React, { Component } from 'react';
import './App.css';
import 'normalize.css'
import Header from './Header/'
import Content from './MainPage/'
import Footer from './Footer/'
import 'flexboxgrid2/flexboxgrid2.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
