import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import './styles.scss';

import Nav from './components/NavBar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import ModalReports from './components/Modals/ModalReports';
import ModalEvents from './components/Modals/ModalEvents';
import News from './components/News';
import Events from './components/Events';
import Birthday from './components/Birthday';
import Footer from './components/Footer';

import { AdminController } from './Controllers/AdminController';

export default () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    let admin = AdminController.getAdmin();
    if(admin.length > 0){
      setIsAdmin(true);
    }else{
      setIsAdmin(false);
    }
  });

  return(
    <div>
      <ModalReports />
      <ModalEvents />
      <Nav isNotFixed={true} />
      <Banner />
      <Cards />
      <News />
      <Events />
      <div className="title-birthday-content">
        <h1 className="is-size-1 birthday-title">Cumpleaños</h1> 
        <div id="add-birthday" className={`add ${isAdmin ? '' : 'is-hidden'}`}><FaPlus /> <span>Agregar</span></div>
      </div>
      <Birthday />
      <Footer />
    </div>
  )
}