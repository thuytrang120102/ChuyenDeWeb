import FilmsPage from "../pages/FilmsPage";
import Homepage from "../pages/Homepage";

const pathName = {
  homepage: "/",
  films: "/films",
};
const routes = [
  { path: pathName.homepage, element: Homepage },
  { path: pathName.films, element: FilmsPage },
];
export default routes;
