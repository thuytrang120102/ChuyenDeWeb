import FilmDetailPage from "../pages/FilmDetailPage";
import FilmsPage from "../pages/FilmsPage";
import Homepage from "../pages/Homepage";
import SeatSelectingPage from "../pages/SeatSelectingPage";

const pathName = {
  homepage: "/",
  films: "/films",
  filmDetail: "/film/:id",
  seatSelectingPage: "/seatSelecting/",
};
const routes = [
  { path: pathName.homepage, element: Homepage },
  { path: pathName.films, element: FilmsPage },
  { path: pathName.filmDetail, element: FilmDetailPage },
  { path: pathName.seatSelectingPage, element: SeatSelectingPage },
];
export default routes;
