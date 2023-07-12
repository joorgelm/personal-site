import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { REACT_APP_PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src="/images/me.jpg" alt="" />
      </Link>
      <header>
        <h2>Jorge Luís Melgarejo</h2>
        <p><a href="mailto:melgarejo.colarte@gmail.com">melgarejo.colarte@gmail.com</a></p>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
