import React from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/herosection';
import StatementSection from '../components/statement';
import IntroSplitSection from '../components/intro';
import CinematicImageSlider from '../components/cinematicImageSlider';
import '../css/common.css';
import FeaturedProjects from '../components/featuredProjects';
import Footer from '../components/footer';
import SmoothScroll from '../components/wrapperscrolling';

const Landingpage = () => {
  return (
    
    <SmoothScroll className='mainbody'>
    
    <Navbar></Navbar>
    <CinematicImageSlider></CinematicImageSlider>
    <StatementSection></StatementSection>
    <FeaturedProjects></FeaturedProjects>
    <Footer></Footer>
    
    </SmoothScroll>
  );
}

export default Landingpage;
