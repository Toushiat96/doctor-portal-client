import React from 'react';
import Apointment from '../Apointment/Apointment';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testmonials from '../Testmonials/Testmonials';

const Home = () => {
    return (
        <div>
          <Header></Header> 
          <Services></Services>
          <FeaturedService></FeaturedService>
          <Apointment></Apointment>
          <Testmonials></Testmonials>
          <Blogs></Blogs>
          <Doctors></Doctors>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;