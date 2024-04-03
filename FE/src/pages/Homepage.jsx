import { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilmCard from "../components/FilmCard";
import Banner from "../components/Banner";
import filmApi from "../apis/filmApi";
import { Link } from "react-router-dom";

const types = ["Phim đang chiếu", "Phim sắp chiếu"];

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
      <Banner />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-center text-3xl">PHIM ĐANG CHIẾU</h1>

          <div className="flex gap-5 w-full px-2">
            {films.map((film) => {
              return (
                <Link to={`/film/${film.id}`}>
                  <FilmCard key={film.id} film={film} type={types[0]} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-center text-3xl">PHIM SẮP CHIẾU</h1>
          <div className="flex gap-5 w-full px-2">
            {comingFilms.map((film) => {
              return (
                <Link to={`/film/${film.id}`}>
                  <FilmCard key={film.id} film={film} type={types[1]} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
