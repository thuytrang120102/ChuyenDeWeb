import FilmDetailPage from "../pages/FilmDetailPage";
import FilmsPage from "../pages/FilmsPage";
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/SearchPage";
import SeatSelectingPage from "../pages/SeatSelectingPage";
import UserProfilePage from "../pages/UserProfilePage";
import LoginPage from "../pages/account/LoginPage";

const pathName = {
  homepage: "/",
  films: "/films",
  filmDetail: "/film/:id",
  seatSelecting: "/seat-selecting",
  search: "/search",
  userProfile: "/user-profile",
  login: "/login",
};
const routes = [
  { path: pathName.homepage, element: Homepage },
  { path: pathName.films, element: FilmsPage },
  { path: pathName.filmDetail, element: FilmDetailPage },
  { path: pathName.seatSelecting, element: SeatSelectingPage },
  { path: pathName.search, element: SearchPage },
  { path: pathName.userProfile, element: UserProfilePage },
  { path: pathName.login, element: LoginPage },
];
export default routes;
