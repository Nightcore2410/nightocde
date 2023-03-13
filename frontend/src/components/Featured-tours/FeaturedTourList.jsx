import React from 'react'
import TourCard from '../../shared/TourCard'
import TourData from '../../assets/data/tours'
import {Col} from 'reactstrap'

const FeaturedTourList = () => {
  return (
    <>
    {TourData?.map(tours=>(
        <Col lg="3" className='mb-4' key={tours.id}>
            <TourCard tours={tours}/>
        </Col>
    ))}
    </>
  );
};

export default FeaturedTourList
