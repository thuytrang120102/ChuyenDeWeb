import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import routes from "./routes/route";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoryBar from "./components/CategoryBar";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const Main = () => {
    return (
      <>
        {!isLoginPage && <Header />}

        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.element />}
            ></Route>
          ))}
        </Routes>
        {!isLoginPage && <Footer />}
      </>
    );
  };

  return <Router></Router>;
}

export default App;
