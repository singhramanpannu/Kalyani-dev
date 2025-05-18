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
import AboutUsButton from '../components/aboutusbtn';
import WhatWeDo from '../components/WhatWeDo';
import StatementTwo from '../components/statement-2';
import ClientCarousel from '../components/clientcarousel';
import FollowUs from '../components/followus';

const Landingpage = () => {
  return (
    
    <SmoothScroll className='mainbody'>
    
    <Navbar></Navbar>
    <CinematicImageSlider></CinematicImageSlider>
    <StatementSection></StatementSection>
    <AboutUsButton></AboutUsButton>
    <WhatWeDo></WhatWeDo>
    <StatementTwo></StatementTwo>
    <FeaturedProjects></FeaturedProjects>
    <ClientCarousel></ClientCarousel>
    <FollowUs></FollowUs>
    <Footer></Footer>
    
    </SmoothScroll>
  );
}

export default Landingpage;
