import FilmDetailPage from "../pages/FilmDetailPage";
import FilmsPage from "../pages/FilmsPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SeatSelectingPage from "../pages/SeatSelectingPage";

const pathName = {
  homepage: "/",
  films: "/films",
  filmDetail: "/film/:id",
  seatSelectingPage: "/seatSelecting/",
  registerPage: "/register/",
  loginPage: "/login/",
  forgotPage: "/forgot/",
};
const routes = [
  { path: pathName.homepage, element: Homepage },
  { path: pathName.films, element: FilmsPage },
  { path: pathName.filmDetail, element: FilmDetailPage },
  { path: pathName.seatSelectingPage, element: SeatSelectingPage },
  { path: pathName.registerPage, element: RegisterPage },
  { path: pathName.loginPage, element: LoginPage },
  { path: pathName.forgotPage, element: ForgotPasswordPage },
];
export default routes;
