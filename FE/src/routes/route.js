import FilmDetailPage from "../pages/FilmDetailPage";
import FilmsPage from "../pages/FilmsPage";
import Homepage from "../pages/Homepage";

const pathName = {
  homepage: "/",
  films: "/films",
  filmDetail: "/film/:id",
};
const routes = [
  { path: pathName.homepage, element: Homepage },
  { path: pathName.films, element: FilmsPage },
  { path: pathName.filmDetail, element: FilmDetailPage },
];
export default routes;
