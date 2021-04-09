import React, { useState, useEffect } from 'react';
import "./styles.scss";

export default (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    console.log('Triggered');
    const navbar = document.getElementById('navbar');
    // const sticky = navbar.offsetTop;
    const sticky = 300;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add('is-fixed-top');
      } else {
        navbar.classList.remove('is-fixed-top');
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    }
  });

  return (
    // <div className="container">
      <nav>
        <div id="navbar" className={`navbar ${props.isNotFixed ? '' : 'is-fixed-top'}`}>
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/imagenes/LogoSE.png" />
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => setMobileMenu(!mobileMenu)}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div className={`navbar-menu ${mobileMenu ? "is-active" : ""}`}>
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                  Ausentismos
                </a>

                <div className="navbar-dropdown">
                  <a href="https://secol.sharepoint.com/sites/Intranet/SitePages/Ausentismos.aspx" className="navbar-item">
                    Solicitar
                  </a>
                  <a href="https://secol.sharepoint.com/sites/Intranet/SitePages/Ausentismos.aspx?param=aprobaciones" className="navbar-item">
                    Aprobar
                  </a>
                  <hr className="navbar-divider" />
                  <a href="https://secol.sharepoint.com/sites/Intranet/SitePages/Ausentismos.aspx?param=reporte" className="navbar-item">
                    Reporte
                  </a>
                </div>
              </div>

              <a href="https://secol.sharepoint.com/sites/Intranet/SitePages/I+D+I.aspx" className="navbar-item">
                I+D+I
              </a>

              <a href="https://secol.sharepoint.com/sites/Intranet/SitePages/DemosPMIS.aspx" className="navbar-item">
                Demos PMIS
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    // </div>
  )
}