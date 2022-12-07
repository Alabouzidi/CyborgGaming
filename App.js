import {BrowserRouter as Router,Route,Routes } from 'router-react-dom';
import React from "react";
import Header from "./Header/Header";
import Hero from './Hero/Hero';
import MostPopular from './MostPopular/MostPopular';
import GamingLibrary from './GamingLibrary/GamingLibrary';
import Footer from './Footer/Footer';
import Container from './Container/Container';

class App extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Container>
      <Hero />
      <MostPopular />
      <GamingLibrary />
      </Container>
      <Footer />
      </>
    );
  }
}

export default App;
