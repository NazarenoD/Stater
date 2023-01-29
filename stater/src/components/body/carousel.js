import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import CarouselCard from './carouse-card';

const imagb1 = require('../../img/imgbg1r.jpg')
const imagb2 = require('../../img/imgbg2r.jpg')
const imagb3 = require('../../img/imgbg3r.jpg')

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={imagb1}
        alt='...'
      >
        <div className='content-carousel w-50'>
            <CarouselCard/>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={imagb2}
        alt='...'
      >
        <div className='content-carousel w-50'>
            <CarouselCard/>
        </div>

      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={imagb3}
        alt='...'
      >
        <div className='content-carousel w-50'>
            <CarouselCard/>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
    
  );
}