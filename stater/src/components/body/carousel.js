import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import CarouselCard from './carouse-card';
import Hello from './hello';

const imagb1 = require('../../img/imgbg1r.jpg')
const imagb2 = require('../../img/imgbg2r.jpg')


export default function Carousel() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <Hello/>
   
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={imagb1}
        alt='...'
      >
        <div className='content-carousel w-50'>
            <CarouselCard
            data = {{'id':1}}
            />
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={imagb2}
        alt='...'
      >
        <div className='content-carousel w-50'>
            <CarouselCard
            data = {{'id':2}}
            />
        </div>

      </MDBCarouselItem>
    </MDBCarousel>
    </>
    
  );
}