import React, { useEffect } from 'react';
import "./styles.scss";

export default () => {

  useEffect(() => {
    const btnOpenReports = document.getElementById("open-reports");
    const btnOpenProjects = document.getElementById("open-projects");
    const btnOpenEncuestas = document.getElementById("open-encuestas");
    const btnClose = document.getElementById("close-modal");
    const modalCards = document.getElementById("modal-cards");
    const modalContent = document.getElementById("modal-content");
    btnOpenReports.addEventListener("click", () => {
      modalCards.style.opacity = 1;
      modalCards.style.zIndex = 5000;
      modalContent.style.marginTop = 0;
      modalContent.innerHTML = templateReports();
    });
    btnOpenProjects.addEventListener("click", () => {
      modalCards.style.opacity = 1;
      modalCards.style.zIndex = 5000;
      modalContent.style.marginTop = 0;
      modalContent.innerHTML = templateProjects();
    });
    btnOpenEncuestas.addEventListener("click", () => {
      modalCards.style.opacity = 1;
      modalCards.style.zIndex = 5000;
      modalContent.style.marginTop = 0;
      modalContent.innerHTML = templateEncuestas();
    });
    btnClose.addEventListener("click", () => {
      modalCards.style.opacity = 0;
      modalCards.style.zIndex = -1;
      modalContent.style.marginTop = "-400px";
    });
    return () => {
      btnOpenReports.removeEventListener("click", () => {});
      btnOpenProjects.removeEventListener("click", () => {});
      btnOpenEncuestas.removeEventListener("click", () => {});
      btnClose.removeEventListener("click", () => {});
    }
  });

  return (
    <div className="container mt-6 cards-content">
      <div className="card card-reportes">
        <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/logo-powerbi.png" alt=""/>
        <h3>Reportes</h3>
        <div id="expand-reports" className="expand expand-reports">
          <a id="open-reports">Abrir</a>
        </div>
      </div>
      <div className="card card-project">
        <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/logo-msproject.png" alt=""/>
        <h3>Proyectos</h3>
        <div className="expand expand-projects">
          <a id="open-projects">Abrir</a>
        </div>
      </div>
      <div className="card card-encuestas">
        <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/encuesta.png" alt=""/>
        <h3>Encuestas</h3>
        <div className="expand expand-encuestas">
          <a id="open-encuestas">Abrir</a>
        </div>
      </div>
    </div>
  )
}

function templateReports () {
  return `
    <h1>Reportes</h1>
  `;
}

function templateProjects () {
  return `
    <h1>Proyectos</h1>
  `;
}

function templateEncuestas () {
  return `
    <h1>Encuestas</h1>
  `;
}