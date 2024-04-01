import CategoryBar from "../components/CategoryBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import kong from "../assets/images/homepage/kong.jpg"
import FilmCard from "../components/FilmCard";

const types = ["Phim đang chiếu", "Phim sắp chiếu"]

const Homepage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <CategoryBar />
      <div className="flex flex-col gap-5">
        <div className="w-full">
          <img className="w-full" src={kong}  />  </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-center text-3xl">PHIM ĐANG CHIẾU</h1>
          
          <div className="flex gap-5 w-full px-2">
            <FilmCard type={types[0]} />
            <FilmCard type={types[0]} />
            <FilmCard type={types[0]} />
            <FilmCard type={types[0]} />
            <FilmCard type={types[0]} />
            
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h1 className="text-white text-center text-3xl">PHIM SẮP CHIẾU</h1>
          
          <div className="flex gap-5 w-full px-2">
            <FilmCard type={types[1]} />
            <FilmCard type={types[1]} />
            <FilmCard type={types[1]} />
            <FilmCard type={types[1]} />
            <FilmCard type={types[1]} />
            
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
