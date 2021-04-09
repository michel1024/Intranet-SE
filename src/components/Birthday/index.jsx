import React, { useState, useEffect } from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import './styles.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default () => {
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setOffsetY(document.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="birthday-content" id="birthday-content" style={{ transform: `translateY(-${offsetY * 0.07}px)` }}>
      <div className="container has-text-centered">
        <div className="birthdayCardsContent">
          <Slider {...settings}>
            <div className="birthday">
              <div className="image-content">
                <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/people1.jpg" alt=""/>
              </div>
              <h2>Abril 05</h2>
              <p>- 2021 -</p>
            </div>

            <div className="birthday">
              <div className="image-content">
                <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/people2.jpeg" alt=""/>
              </div>
              <h2>Abril 05</h2>
              <p>- 2021 -</p>
            </div>

            <div className="birthday">
              <div className="image-content">
                <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/people3.jpeg" alt=""/>
              </div>
              <h2>Abril 05</h2>
              <p>- 2021 -</p>
            </div>

            <div className="birthday">
              <div className="image-content">
                <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/people4.jpeg" alt=""/>
              </div>
              <h2>Abril 05</h2>
              <p>- 2021 -</p>
            </div>

            <div className="birthday">
              <div className="image-content">
                <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/people5.jpeg" alt=""/>
              </div>
              <h2>Abril 05</h2>
              <p>- 2021 -</p>
            </div>

            <div className="birthday">
              <div className="image-content">
                <img src="https://secol.sharepoint.com/sites/Intranet/SiteAssets/IntranetSE/imagenes/people6.jpeg" alt=""/>
              </div>
              <h2>Abril 05</h2>
              <p>- 2021 -</p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
};