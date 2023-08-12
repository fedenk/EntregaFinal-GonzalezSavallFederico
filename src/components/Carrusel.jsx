import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Carrusel = ()=>{
    return(
      <Carousel className="carousel">
      <Carousel.Item interval={2000}>
        <img src="./images/fercarousel.jpg" alt="ferreteria" />
        <Carousel.Caption>
          <h3 className="h3_carousel">Ferreteria</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="./images/barcarousel.jpg" alt="bazar" />
        <Carousel.Caption>
          <h3 className="h3_carousel">Bazar</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="./images/belcarousel.jpg" alt="belleza" />
        <Carousel.Caption>
          <h3 className="h3_carousel">Belleza</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img src="./images/fitcarousel.jpg" alt="fitness" />
        <Carousel.Caption>
          <h3 className="h3_carousel">Fitness</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}