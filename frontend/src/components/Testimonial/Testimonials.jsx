import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-3.jpg'
const Testimonials = () => {
    const setings = {
        dots:true,
        infinite:true,
        autoplay:1000,
        speed:1000,
        swipeToSlide:2000,
        slidesToShow:3,

        responsive:[
        {       breakpoint: 992,
                settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,     
            },
           },
           {
                breakpoint: 576,
                settings:{
                slidesToShow:1,
                slidesToScroll:1,

           },
        },
        ]
    }
  return (
    <Slider{...setings}>
    <div className='testimonial py-4 px-3'>
        <p>
        Tour du lịch này thật sự tuyệt vời! Tour du lịch này thật sự tuyệt vời!  Tour du lịch này thật sự tuyệt vời!Tôi thực sự thích chuyến du lịch này! Tour du lịch đưa chúng tôi đến những địa điểm thú vị và hướng dẫn viên du lịch rất tận tâm và thân thiện. Tôi sẽ chắc chắn quay lại với đoàn du lịch này trong tương lai.
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
        Tour du lịch này thật tuyệt vời! Tôi và gia đình tôi đã có những trải nghiệm tuyệt vời, từ việc khám phá những địa danh nổi tiếng đến thưởng thức ẩm thực địa phương. Điều tuyệt vời nhất là chúng tôi đã được kết nối với những người địa phương, để hiểu rõ hơn về nền văn hóa độc đáo của đất nước này.
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
        Chuyến đi này quá tuyệt vời! Hướng dẫn viên du lịch là một người rất thông thạo về văn hóa và lịch sử, giúp chúng tôi hiểu rõ hơn về đất nước này. Tôi đã học được rất nhiều điều mới và có những trải
        nghiệm khó quên trong chuyến đi này,Chuyến đi này quá tuyệt vời! Hướng dẫn viên du lịch là một người rất thông thạo về văn hóa.</p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
        <div className='testimonial py-4 px-3'>
        <p>
        Tôi đã đi nhiều chuyến du lịch trước đây, nhưng tour du lịch này thực sự là một trải nghiệm độc đáo. Tôi thích cách hướng dẫn viên du lịch thực hiện chuyến đi, bao gồm cả thời gian tự do để chúng tôi có thể khám phá địa phương theo cách của riêng mình. Điều này giúp tôi có thể tận hưởng chuyến đi một cách tốt nhất.
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
        <div className='testimonial py-4 px-3'>
        <p>
        Tour du lịch này thật sự tuyệt vời! Tour du lịch này thật sự tuyệt vời! Tôi đã được khám phá những địa danh đẹp nhất của đất nước này, cùng với những người bạn mới và hướng dẫn viên du lịch tuyệt vời. Chuyến đi này thực sự là một kỷ niệm khó quên và tôi sẽ giới thiệu cho bạn bè của mình về đoàn du lịch này.
         </p>
      <div className='d-flex aligin-itmes-center gap-4 mt-3'>
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
      </div>
      <h6 className='mb-0 mt-3'>nighcode </h6>
      <p>
        Customer
      </p>
    </div>
    </Slider>
  )
}

export default Testimonials
