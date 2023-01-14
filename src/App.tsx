import React from 'react';
import './App.css';
import Carousel from './layouts/NavbarAndFooter/HomePage/Carousel';
import ExploreTopBooks from './layouts/NavbarAndFooter/HomePage/ExploreTopBooks';
import Footer from './layouts/NavbarAndFooter/HomePage/Footer';
import Heros from './layouts/NavbarAndFooter/HomePage/Heros';
import LibraryServices from './layouts/NavbarAndFooter/HomePage/LibraryServices';
import ReturnBook from './layouts/NavbarAndFooter/HomePage/ReturnBook';
import Navbar from './layouts/NavbarAndFooter/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <ReturnBook />
      <Heros />
      <LibraryServices />
      <Footer />
    </div>

  );
}

export default App;
