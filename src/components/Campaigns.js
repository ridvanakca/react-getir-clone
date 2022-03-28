import { useState, useEffect } from "react";
import Slider from "react-slick";
import Title from "./ui/Title";
import bannersData from "../api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ className, style, onClick }) {
  return (
    <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowForward />
    </button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
      <IoIosArrowBack />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(bannersData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className='container mx-auto md:pt-8'>
      {!banners.length && `<p>Loading</p>`}
      <div className='hidden md:block'>
        <Title>Kampanyalar</Title>
      </div>
      <Slider className='md:-mx-2' {...settings}>
        {banners &&
          banners.map((banner) => (
            <div key={banner.id}>
              <picture className='block md:px-2'>
                <img className='md:rounded-lg' src={banner.image} alt='' />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
