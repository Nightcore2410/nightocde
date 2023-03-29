import React , {useState} from 'react'
import { Container ,Row ,Col} from 'reactstrap'
import CommonSection from "../shared/CommonSection"
import TourCard from '../shared/TourCard'
import { useLocation } from 'react-router-dom'
import Newsletter from '../shared/Newsletter'

const SearchResultList = () => {
  const location = useLocation ();
  const [data] = useState(location.state)
  console.log(data)
  return (
    <>
    <CommonSection title={'Tour Search Result'}/>
    <section>
      <Container>
        <Row>
        {
             data.length === 0 ? (
              // If data array is empty
              <h4 className='text-center'>No tour found</h4>
            ) : (
              // If data array is not empty
              data?.map(tour => (
              <Col lg='3' className='mb-4' key={tour._id}>
              <TourCard tours={tour} />
              </Col>
              ))
            )
            }
        </Row>
      </Container>
    </section>
    <Newsletter/>
    
    </>
  )
}

export default SearchResultList





