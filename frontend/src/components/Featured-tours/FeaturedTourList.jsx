import React from 'react'
import TourCard from '../../shared/TourCard'
import {Col} from 'reactstrap';
import useFetch from '../../hooks/useFetch';
import {BASE_URL} from '../../utils/config'


const FeaturedTourList = () => {
  const {data : featuredTours,loading , error} = useFetch(
    `${BASE_URL}/tours/search/getFeaturedTour` );

  return (
    <>
    {
      loading && <h4>Loanding.............</h4>
    }
    {
      error && <h4>{error}</h4>
    }
    {!loading && !error && featuredTours?.map(tours=>(
        <Col lg="3" className='mb-4' key={tours._id}>
            <TourCard tours={tours}/>
        </Col>
    ))}
    </>
  );
};

export default FeaturedTourList
