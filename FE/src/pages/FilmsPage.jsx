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
    <div className="text-white bg-neutral-900">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex gap-8 p-3">
          <div className="flex flex-col w-1/5 gap-8 py-6 text-xl text-center uppercase pt-14">
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
          <div className="flex flex-col items-center justify-center w-4/5 gap-6 py-5">
            <div className="grid w-full grid-cols-3 gap-5">
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
    </div>
  );
};
export default FilmPage;
