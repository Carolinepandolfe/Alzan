import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="copyright">
        <p>Copyright &copy; 2020 - Alzan - Todos os Direitos Reservados.</p>
      </div>
      <div className="dev">
        <p>Desenvolvido por</p>
        <a href="https://www.linkedin.com/in/carolinepandolfe/">
          Caroline Pandolfe
        </a>
      </div>
    </footer>
  );
}

export default Footer;
