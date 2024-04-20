import { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilmCard from "../components/FilmCard";
import Banner from "../components/Banner";
import filmApi from "../apis/filmApi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import kong from "../assets/images/homepage/kong.jpg";
import thanhGuom from "../assets/images/homepage/thanhguomdietquy.jpg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

const types = ["Phim đang chiếu", "Phim sắp chiếu"];
const settingsBanner = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const settingsSlider = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  autoplaySpeed: 1000,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <FaCircleArrowLeft />,
  nextArrow: <FaCircleArrowRight />,
};
const childrenBanners = [
  <img className="w-full h-[450px] object-fill" src={kong} alt="" />,
  <img className="w-full h-[450px] object-fill" src={thanhGuom} alt="" />,
  <img className="w-full h-[450px] object-fill" src={kong} alt="" />,
  <img className="w-full h-[450px] object-fill" src={thanhGuom} alt="" />,
  <img className="w-full h-[450px] object-fill" src={kong} alt="" />,
];
const Homepage = () => {
  const [films, setFilms] = useState([]);
  const [comingFilms, setComingFilms] = useState([]);

  useEffect(() => {
    filmApi
      .getAll("")
      .then((response) => {
        setComingFilms(response.data.pageProps.res.listComingMovie);
        setFilms(response.data.pageProps.res.listMovie);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <CategoryBar />
      <Banner settings={settingsBanner}>
        {childrenBanners.map((childrenBanner) => {
          return childrenBanner;
        })}
      </Banner>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-center text-3xl">PHIM ĐANG CHIẾU</h1>
          <Banner settings={settingsSlider}>
            {films.map((film) => {
              return (
                <Link to={`/film/${film.id}`}>
                  <FilmCard key={film.id} film={film} type={types[0]} />
                </Link>
              );
            })}
          </Banner>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-center text-3xl">PHIM SẮP CHIẾU</h1>
          <Banner settings={settingsSlider}>
            {comingFilms.map((film) => {
              return (
                <Link to={`/film/${film.id}`}>
                  <FilmCard key={film.id} film={film} type={types[1]} />
                </Link>
              );
            })}
          </Banner>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
