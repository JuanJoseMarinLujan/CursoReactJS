import React from "react";
import Header from "./components/header/Header";
import Home from './components/home/Home'
import About from './components/about/About'
import Work from "./components/work/Work";
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import "./App.scss";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
