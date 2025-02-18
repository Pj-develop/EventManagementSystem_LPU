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
    autoplaySpeed: 4000,
    fade: true, // Enable fade effect
    lazyLoad: 'ondemand', // Enable lazy loading
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: current => console.log('after change', current)
  };

  // Custom arrow components
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="block m-10">
      <Slider {...settings}>
        <div>
          <img
            src="../src/assets/sponsor2.jpg"
            alt="slide1"
            className="w-full max-h-200 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div>
          <img
            src="../src/assets/sponsorship1.jpg"
            alt="slide2"
            className="w-full max-h-200 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        </div>
        <div>
          <img
            src="../src/assets/events.jpg"
            alt="slide3"
            className="w-full max-h-200 object-cover rounded-md transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleCarousel;