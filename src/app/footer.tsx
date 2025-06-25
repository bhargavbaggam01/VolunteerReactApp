import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-light py-4 mt-auto border-top">
    <div className="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
      <a href="/legal" className="text-light text-decoration-none opacity-75 hover-opacity-100">Legal</a>
      <span className="d-none d-md-inline">|</span>
      <a href="/privacy" className="text-light text-decoration-none opacity-75 hover-opacity-100">Privacy Policy</a>
      <span className="d-none d-md-inline">|</span>
      <a href="#" className="text-light text-decoration-none opacity-75 hover-opacity-100">GDPR Compliance</a>
    </div>
  </footer>
);

export default Footer;
