import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryBar from "../components/CategoryBar";
import FilmCard from "../components/FilmCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import filmApi from "../apis/filmApi";

const types = ["Phim đang chiếu", "Phim sắp chiếu"];

const FilmPage = () => {
  const [films, setFilms] = useState([]);
  const [type, setType] = useState("Phim đang chiếu");

  useEffect(() => {
    filmApi
      .getAll("")
      .then((response) => {
        type === types[0]
          ? setFilms(response.data.pageProps.res.listMovie)
          : setFilms(response.data.pageProps.res.listComingMovie);
      })
      .catch((error) => console.error(error));
  }, [type]);

  return (
    <div className="bg-neutral-900 text-white">
      <div className="relative max-w-7xl mx-auto">
        <Header />
        <CategoryBar />
        <div className="flex gap-8 p-3">
          <div className="w-1/5 pt-14 flex flex-col gap-8 py-6 text-center  text-xl uppercase">
            {types.map((t) => {
              return (
                <div
                  className={`cursor-pointer hover:text-blue-600 ${
                    type === t ? "text-blue-600 duration-300" : ""
                  }`}
                  onClick={() => setType(t)}
                  key={t}
                >
                  {t}
                </div>
              );
            })}
          </div>
          <div className="w-4/5 py-5 flex flex-col gap-6 justify-center items-center">
            <div className="w-full grid grid-cols-3 gap-5">
              {films.map((film) => {
                return (
                  <Link to={`/film/${film.id}`}>
                    <FilmCard key={film.id} film={film} type={type} />
                  </Link>
                );
              })}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FilmPage;
