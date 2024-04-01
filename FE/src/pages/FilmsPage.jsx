import { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import FilmCard from "../components/FilmCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import FilmDetail from "../components/FilmDetail";

const types = ["Phim đang chiếu", "Phim sắp chiếu"];

const FilmPage = () => {
  const [films, setFilms] = useState([])  
  const [type, setType] = useState("Phim đang chiếu")
  
  useEffect(()=> {
    fetch("https://cinestar.com.vn/_next/data/soeA7SSsB1xBn19KUx2x5/index.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {(type === "Phim đang chiếu") ? setFilms(data.pageProps.res.listMovie) : setFilms(data.pageProps.res.listComingMovie)})
  }, [type])

  return (
    <div className="bg-neutral-900 text-white">
      <div className="relative max-w-7xl mx-auto">
        <Header />
        <CategoryBar />
        {/* <FilmDetail /> */}
        <div className="flex gap-8 p-3">
          <div className="w-1/5 flex flex-col gap-8 py-6 text-center">
            <div className="text-3xl font-semibold">Tổng hợp phim</div>
            <ul className="flex flex-col gap-5 text-xl uppercase">
              {types.map((t) => {
                return <li className={`cursor-pointer hover:text-blue-600 ${(type === t) ? "text-blue-600 duration-200" : ""}`} onClick={() => setType(t)} key={t}>{t}</li>
              })}
            </ul>
          </div>
          <div className="w-4/5 py-5 flex flex-col gap-6 justify-center items-center">
            <div className="w-full grid grid-cols-3 gap-5">
              {films.map(film => { 
                return <FilmCard key={film.id} name={film.name_vn}/>
              })}
            </div>
            <Pagination/>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};
export default FilmPage;
