import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Jorge Luís Melgarejo via email @ hi@mldangelo.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contato</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Você pode falar comigo através das redes sociais ou pelo email: </p>
        <a href="mailto:melgarejo.colarte@gmail.com">
          <span>melgarejo.colarte@gmail.com</span>
        </a>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
