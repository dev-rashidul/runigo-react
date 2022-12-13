import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import About from './About/About';
import Benefits from './Benefits/Benefits';
import Hero from './Hero/Hero';
import Mentor from './Mentor/Mentor';
import Talk from './Talk/Talk';
import Testimonial from './Testimonial/Testimonial';
import Works from './Works/Works';

const Home = () => {

// AOS initialize
useEffect(() => {
    Aos.init({duration: 1000})
}, [])

  return (
    <div>
      {/* <!-- Header Part HTML Start --> */}

      <header>

        {/* <!-- Hero Section HTML Start --> */}

        <Hero></Hero>

        {/* <!-- Hero Section HTML End --> */}
      </header>

      {/* <!-- Header Part HTML End --> */}

      {/* <!-- Main Part HTML Start --> */}

      <main>
        {/* <!-- Talk Section HTML Start --> */}

        <Talk></Talk>

        {/* <!-- Talk Section HTML End --> */}

        {/* <!-- About Section HTML Start --> */}

        <About></About>

        {/* <!-- About Section HTML End --> */}

        {/* <!-- Benefits Section HTML Start --> */}

        <Benefits></Benefits>

        {/* <!-- Benefits Section HTML End --> */}

        {/* <!-- Testimonial Section HTML Start --> */}

        <Testimonial></Testimonial>

        {/* <!-- Testimonial Section HTML End --> */}

        {/* <!-- Works Section HTML Start --> */}

        <Works></Works>

        {/* <!-- Works Section HTML End --> */}

        {/* <!-- Mentor Section HTML Start --> */}

        <Mentor></Mentor>

        {/* <!-- Mentor Section HTML End --> */}
      </main>

      {/* <!-- Main Part HTML End --> */}
    </div>
  );
};

export default Home;
