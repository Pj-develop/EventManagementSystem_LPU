import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="block m-10">
      <Slider {...settings}>
        <div>
          <img
            src="../src/assets/hero2.jpg"
            alt="slide1"
            className="w-full max-h-200 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div>
          <img
            src="../src/assets/banner.jpg"
            alt="slide2"
            className="w-full max-h-200 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div>
          <img
            src="../src/assets/banner3.jpg"
            alt="slide3"
            className="w-full max-h-200 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleCarousel;
