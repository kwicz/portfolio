import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import pic9 from '../assets/images/pic09.jpg';
import pic10 from '../assets/images/pic10.jpg';
import pic11 from '../assets/images/pic11.jpg';
import pic13 from '../assets/images/pic13.jpg';
import pic14 from '../assets/images/pic14.jpg';
import creature from '../assets/images/creature.jpg';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Katy!</strong>
              <br />
              I'm a Software Developer in Portland, OR.
            </h2>
          </header>

          <footer>
            <Scroll type="id" element={'contact'}>
              <a href="#contact" className="button">
                Get in touch!
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <hr />
          <p>
            Commercial
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://securinghardware.com/" className="image fit">
                  <img src={pic2} alt="" />
                </a>
                <header>
                  <h3>SecuringHardware.com</h3>
                  <p>2 Sites in One - A business site built with Jekyll, and a sister site for online courses built with WordPress and Learndash LMS.</p>
                  <p><a target="_blank" href="https://securinghardware.com/">View Live</a></p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://www.wholelifechiropracticpdx.com/" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Whole Life Chiropractic</h3>
                  <p>A business site for a local chiropractic practice, tailored with WordPress and BoldGrid.</p>
                  <p><a target="_blank" href="https://www.wholelifechiropracticpdx.com/">View Live</a></p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://www.happycamelwool.com/" className="image fit">
                  <img src={pic4} alt="" />
                </a>
                <header>
                  <h3>Happy Camel</h3>
                  <p>An customized e-commerce site built with Wordpress and WooCommerce.</p>
                  <p><a target="_blank" href="https://www.happycamelwool.com/">View Live</a></p>
                </header>
              </article>
            </div>
          </div>

          <hr />
          <p>
            Open Source & Fun Experiments
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://github.com/kwicz/dmv2uAPI" className="image fit">
                  <img src={pic5} alt="" />
                </a>
                <header>
                  <h3>Oregon Plates API</h3>
                  <p>A Python/Flask API made as a contribution to the quirky Oregon Plates project.</p>
                  <p><a target="_blank" href="https://github.com/kwicz/dmv2uAPI">Source</a></p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://github.com/kwicz/vanity-plate-search" className="image fit">
                  <img src={pic13} alt="" />
                </a>
                <header>
                  <h3>DMV2U</h3>
                  <p>A Python/Flask app that queries the DMV2U SQLite database to find data about vanity license plates in Oregon.</p>
                  <p><a target="_blank" href="https://github.com/kwicz/vanity-plate-search">Source</a></p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://kwicz.github.io/dog-breed-identifier/" className="image fit">
                  <img src={pic9} alt="" />
                </a>
                <header>
                  <h3>Dog Identifier</h3>
                  <p>A fun project using TensorFlow JS and pre-trained models to identify dog breeds.</p>
                  <p><a target="_blank" href="https://kwicz.github.io/dog-breed-identifier/">View Live</a> | <a href="https://github.com/kwicz/dog-breed-identifier">Source</a></p>
                </header>
              </article>
            </div>
          </div>

          
          <hr />
          <p>
            Epicodus Code School
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://github.com/kwicz/CreatureTeacher.Solution" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Creature Teacher</h3>
                  <p>An ASP.NET Core MVC web application designed to teach young users about DNA and Codons by creating creatures and mixing their DNA.</p>
                  <p><a target="_blank" href="https://github.com/kwicz/CreatureTeacher.Solution">Source</a></p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://github.com/kwicz/ParkFinder.Solution" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Park Finder</h3>
                  <p>A C#.NET Core RESTful API with a seeded MySQL database containing all National Parks.  Corresponding client-side app is linked in the GitHub repository.</p>
                  <p><a target="_blank" href="https://github.com/kwicz/ParkFinder.Solution">Source</a></p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://kwicz.github.io/redux-neumorphic-tap-room/" className="image fit">
                  <img src={pic8} alt="" />
                </a>
                <header>
                  <h3>Neumorphic Tap Room</h3>
                  <p>A React/Redux application to manage keg and pint inventories for a tap room.</p>
                  <p><a target="_blank" href="https://kwicz.github.io/redux-neumorphic-tap-room/">View Live</a> | <a href="https://github.com/kwicz/redux-neumorphic-tap-room">Source</a></p>
                </header>
              </article>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://quality-survey-time.firebaseapp.com/signup" className="image fit">
                  <img src={pic10} alt="" />
                </a>
                <header>
                  <h3>Survey Creator</h3>
                  <p>A React/Redux web application for making dynamic survey forms and taking surveys others have made. Hosted with Firebase.</p>
                  <p><a target="_blank" href="https://quality-survey-time.firebaseapp.com/signup">View Live</a> | <a href="https://github.com/kwicz/quality-survey-time">Source</a></p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://karaoke-team.web.app/" className="image fit">
                  <img src={pic14} alt="" />
                </a>
                <header>
                  <h3>Karaoke Party</h3>
                  <p>A mobile-first app that allows users to set songs to a shared playlist with their phones via Firebase and then read from a connected monitor.</p>
                  <p><a target="_blank" href="https://karaoke-team.web.app/">View Live</a> | <a href="https://github.com/kwicz/Karaoke-Party">Source</a></p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a target="_blank" href="https://github.com/kwicz/stock-market-game" className="image fit">
                  <img src={pic11} alt="" />
                </a>
                <header>
                  <h3>Stock Market Game</h3>
                  <p>A Python/Flask app that calles the AlphaVantage API to allow user to make pretend investments and see how their portfolio fares over time.</p>
                  <p><a target="_blank" href="https://github.com/kwicz/stock-market-game">Source</a></p>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>
          <div className="row">
            <div className="col-4 col-12-mobile">
              <p className="image featured">
                <img src={creature} alt="Cartoon Creature Katy"/>
              </p>
            </div>
            <div className="col-8 col-12-mobile">
              {/* <p>I've spent my career working as a teacher, a coach, a manager, a non-profit leader, and an entrepreneur.  The common threads for those roles were my enjoyment helping and supporting the people around me, but also the technology I was able to use. From Salesforce, to accounting systems, to good old spreadsheets, I knew I wanted to my next role to be data-centric. After building a Wordpress site for my e-commerce company, I kept on coding.  After two years of building Python projects for fun, I took the leap to turn my hobby into a career and enrolled in a full-time, 6-month intensive program to learn C#.NET and React.js. While enrolled, I also learned solid coding logic, functional programming, testing, and best practices for working as a developer.  I am now excited to start a role where I can continue to code while still getting to help and support others.</p> */}
              <p>I am a former education professional, non-profit leader, and e-commerce entrepreneur who fell in love with software development.</p>
              <p>My favorite tools of the trade include Javascript/jQuery, ReactJS, C#/.NET, Python/Flask, and WordPress. </p>
              <p>Outside of the terminal, you'll find me riding my cargo bike around Portland, gardening in my backyard, baking something from The Great British Baking Show, or snuggling verygooddogsyestheyare.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            Please reach out! I'd love to hear from you.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" required/>
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" required/>
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" required/>
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
