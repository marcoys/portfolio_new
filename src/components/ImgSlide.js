import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function ImgSlide(props) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [

    ]
  };
  return (
    <>
      <Slider {...settings}>
        {
          props.image.map((item, index) => {
            return (
              <div key={index}>
                <img src={process.env.PUBLIC_URL+ `/images/${item}.gif`} alt={item} />
              </div>
            )
          })
        }
      </Slider>
    </>
  )
}

export default ImgSlide