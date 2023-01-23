import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import CarouselCard from './carouse-card';

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      >
        <div className='content-carousel w-50'>
            <CarouselCard/>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      >
        <div className='content-carousel w-50'>
            <CarouselCard/>
        </div>

      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      >
        <div className='content-carousel w-50'>
            <CarouselCard/>
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
    
  );
}