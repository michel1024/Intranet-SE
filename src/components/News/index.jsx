import React from 'react';
import {FaPlus } from 'react-icons/fa';
import './styles.scss';

export default () => {
  return (
    <div className="newsContent">
      <div className="title-news-content">
        <h1 className="is-size-1 news-title">Noticias</h1> 
        <div id="add-news" className="add"><FaPlus /> <span>Agregar</span></div>
      </div>
      {/* <h1 className="has-text-centered mb-6 is-size-1">Noticias</h1> */}
      <div className="newsCardsContent">
        <div className="newsCards">
          <div className="cardImage">
            <div className="cliente cliente-millicom"><h1 className="has-text-white is-size-3">MILLICOM</h1></div>
            <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/millicom-news.jpg" alt=""/>
          </div>
          <div className="cardContent">
            <h3>
            Mauricio Ramos es el nuevo presidente del Consejo Empresarial Estados Unidos-Colombia
            </h3>
            <a target="_blank" href="https://www.larepublica.co/empresas/mauricio-ramos-es-el-nuevo-presidente-del-consejo-empresarial-estados-unidos-colombia-3122702">Ver más</a>
          </div>
        </div>
        <div className="newsCards">
          <div className="cardImage">
            <div className="cliente cliente-intervial"><h1 className="has-text-white is-size-3">INTERVIAL</h1></div>
            <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/intervial-news.jpg" alt=""/>
          </div>
          <div className="cardContent">
            <h3>
            Intervial Chile coloca sus primeros bonos para Ruta del Loa
            </h3>
            <a target="_blank" href="https://lexlatin.com/noticias/intervial-chile-coloca-primeros-bonos-ruta-loa">Ver más</a>
          </div>
        </div>
        <div className="newsCards">
          <div className="cardImage">
            <div className="cliente cliente-ingredion"><h1 className="has-text-white is-size-3">INGREDION</h1></div>
            <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/news-ingredion.jpg" alt=""/>
          </div>
          <div className="cardContent">
            <h3>
            Ingredion tiene nuevo presidente para Suramérica
            </h3>
            <a target="_blank" href="https://www.semana.com/ingredion-tiene-nuevo-presidente-para-suramerica/302750/">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  )
}