import { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilmCard from "../components/FilmCard";
import Banner from "../components/Banner";

const types = ["Phim đang chiếu", "Phim sắp chiếu"]

const Homepage = () => {
  const [films, setFilms] = useState([])  
  const [comingFilms, setComingFilms] = useState([])  
  
  useEffect(()=> {
    fetch("https://cinestar.com.vn/_next/data/k5FG7BO4DqMDEfCOuIX5o/index.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {setComingFilms(data.pageProps.res.listComingMovie)
                    setFilms(data.pageProps.res.listMovie)  })
  }, [])
  console.log("films",films);
  console.log("comingFilms",comingFilms);
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <CategoryBar />
      <Banner/>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-center text-3xl">PHIM ĐANG CHIẾU</h1>
          
          <div className="flex gap-5 w-full px-2">
            {films.map(film => {
              return <FilmCard type={types[0]} film={film} />
            })}
          
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-center text-3xl">PHIM SẮP CHIẾU</h1>
          
          <div className="flex gap-5 w-full px-2">
          {comingFilms.map(film => {
              return <FilmCard type={types[1]} film={film} />
            })}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
