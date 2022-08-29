import React from 'react';
import { Link } from 'react-router-dom';

import EmailLink from '../Contact/EmailLink';
import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link> */}
      <header>
        <h2>Ismael Abujadur</h2>
        {/* <p><a href="mailto:ismaelabujadur@gmail.com">ismaelabujadur@gmail.com</a></p> */}
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I am Ismael. I like to solve problems.
        I am a computer science and engineering undergraduate,
        who would love to help society in meaningful ways,
        and the environment that surrounds us.
      </p>

      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ismael Abujadur <Link to="/">ismaelabujadur.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
