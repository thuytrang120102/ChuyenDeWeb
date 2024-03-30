import Search from "./Search";
import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="bg-gray-800 h-24 max-w-7xl mx-auto flex justify-between items-center">
      <img className="w-40 h-20" src={logo} alt="Ironhack logo" />
      <Search />
      <div className="flex gap-1 text-base text-white items-center ">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          className="w-8 rounded-full"
          alt="Avatar"
        />
        <div>Đăng nhập</div>
        <div>/</div>
        <div>Đăng ký</div>
      </div>
    </div>
  );
};
export default Header;
