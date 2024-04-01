import CategoryBar from "../components/CategoryBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import kong from "../assets/images/homepage/kong.jpg"
import FilmCard from "../components/FilmCard";
const Homepage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <CategoryBar />
      <div>
        <div className="w-full h-[700px]">
          <img className="w-full" src={kong}  />  </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-white text-center text-5xl text-">Phim đang chiếu</h1>
          
          <div className="flex gap-5 w-full px-2">
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
            <FilmCard />
          

            
        
          </div>
        </div>
          
        <div className="flex flex-col">phim đang chiếu</div>
      </div>
      <Footer />
    </div>
  );
};
export default Homepage;
