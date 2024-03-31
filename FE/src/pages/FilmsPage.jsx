import CategoryBar from "../components/CategoryBar";
import FilmCard from "../components/FilmCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

const FilmPage = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <Header />
        <CategoryBar />
        <div className="flex gap-8 p-3">
          <div className="w-1/5 flex flex-col gap-8 py-6 text-center">
            <div className="text-3xl font-semibold">Tổng hợp phim</div>
            <ul className="flex flex-col gap-5 text-xl uppercase">
              <li>Phim đang chiếu</li>
              <li>Phim sắp chiếu</li>
            </ul>
          </div>
          <div className="w-4/5 flex flex-col gap-6 justify-center items-center">
            <div className="w-full grid grid-cols-3 gap-5">
              <FilmCard/>
              <FilmCard/>
              <FilmCard/>
              <FilmCard/>
              <FilmCard/>
              <FilmCard/>
              <FilmCard/>
            </div>
            <Pagination/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default FilmPage;
