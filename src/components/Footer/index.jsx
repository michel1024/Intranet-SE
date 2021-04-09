import React from 'react';
import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import './styles.scss';

export default () => {
  return (
    <div className="footer">
      <div className="footer-content mb-6">
        <a target="_blank" href="https://www.linkedin.com/in/sistemas-expertos/"><FaLinkedin /></a>
        <a target="_blank" href="https://www.instagram.com/sistemas_expertos/"><FaInstagram /></a>
        <a target="_blank" href="https://www.youtube.com/channel/UC_9B1rGh8UMjl3H8rI2OdHg"><FaYoutube /></a>
        <a target="_blank" href="https://twitter.com/seproyectos"><FaTwitter /></a>
      </div>
      <h3 className="has-text-centered mt-6">Todos los derechos reservados &copy; Sistemas Expertos S.A.S 2021</h3>
    </div>
  )
}