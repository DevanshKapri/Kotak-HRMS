import React from 'react';
import logo from './logo.png'
import {Link} from "react-router-dom"
function Landing() {
    return (
        <>
 
  <div className="body-wrap">
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <a href="#">
                <img
                  className="header-logo-image"
                  src={logo}
                  width="100px"
                  height="100px"
                  alt="Logo"
                />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section className="hero">
        <div className="container" id="about">
          <div className="hero-inner">
            <div className="hero-copy">
              <h1 className="hero-title mt-0">Kotak Education</h1>
              <p className="hero-paragraph"></p>
              <h5
                className="heading42 red-color aos-init aos-animate"
                data-aos="fade-up"
              >
                Educate. Empower. Uplift.
              </h5>
              Our mission is to support children &amp; youth from
              underprivileged families through different education based
              interventions to rise above the poverty line &amp; lead a life of
              dignity through sustainable processes.
              <br />
              <br />
              Uday Kotak, Founder and Managing Director &amp; CEO of Kotak
              Mahindra Bank, has led the group in a broad range of financial
              services for over 30 years. Uday believes that the true measure of
              performance is value creation. The Group's vision for equitable
              prosperity extends beyond financial services. The Kotak Education
              Foundation works with some of India's most economically
              underprivileged communities, attempting to alleviate poverty
              through education and livelihood programs.
              <p />
            </div>
            <div className="hero-figure anime-element">
              <img
                src="https://kotakeducation.org/wp-content/uploads/2019/04/Levels-1.1-1.png"
                alt="Uday Kotak"
                className="man"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="apply">
        &nbsp;
        <div className="hero-cta">
         <Link to='/vacancies'>
         <a className="button button-primary" href="#">
            Vacancies
          </a>
         </Link>
          <Link to='/Signup'><a className="button button-primary" href="#">
            Sign In
          </a></Link>

        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-inner">
          <div className="brand footer-brand">
            <a href="#">
              <img className="header-logo-image" src={logo} alt="Logo" />
            </a>
          </div>
          <ul className="footer-social-links list-reset">
            <h6 className = "contact">
                      Connect With Us:
                  </h6>
            <li>
              <a href="https://www.facebook.com/KotakEducationFoundation/">
                <span className="screen-reader-text">Facebook</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                    fill="#0270D7"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/kotakeducation?lang=en">
                <span className="screen-reader-text">Twitter</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                    fill="#0270D7"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://kotakeducation.org/">
                <span className="screen-reader-text">Google</span>
                <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                    fill="#0270D7"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="footer-copyright">
            © 2022 Code For Good
          </div>
        </div>
      </div>
    </footer>
  </div>
</>

      );
}

export default Landing;