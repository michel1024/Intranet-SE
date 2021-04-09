import React from 'react';
import { FaCalendarAlt, FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './styles.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  }

  return (
    <div className="container">
      <div className="title-events-content">
        <h1 className="is-size-1 title">Eventos</h1> 
        <div id="add-events" className="add"><FaPlus /> <span>Agregar</span></div>
      </div>
      <div className="eventsCardsContent has-text-centered">
        <Slider {...settings}>
          <div className="event">
            <span><FaCalendarAlt /></span>
            <h2>Abril 05</h2>
            <p>- 2021 -</p>
          </div>

          <div className="event">
            <span><FaCalendarAlt /></span>
            <h2>Abril 05</h2>
            <p>- 2021 -</p>
          </div>

          <div className="event">
            <span><FaCalendarAlt /></span>
            <h2>Abril 05</h2>
            <p>- 2021 -</p>
          </div>

          <div className="event">
            <span><FaCalendarAlt /></span>
            <h2>Abril 05</h2>
            <p>- 2021 -</p>
          </div>

          <div className="event">
            <span><FaCalendarAlt /></span>
            <h2>Abril 05</h2>
            <p>- 2021 -</p>
          </div>

          <div className="event">
            <span><FaCalendarAlt /></span>
            <h2>Abril 05</h2>
            <p>- 2021 -</p>
          </div>

          <div className="event">
            <span><FaCalendarAlt /></span>
            <h2>Abril 05</h2>
            <p>- 2021 -</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}