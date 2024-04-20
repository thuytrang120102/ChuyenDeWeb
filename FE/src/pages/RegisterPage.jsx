import logo from "../assets/images/logo.png";
const RegisterPage = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="bg-gray-50 flex flex-col p-7 w-[500px] gap-5 rounded-md">
        <img className="w-40 items-center mx-auto" src={logo} />
        <h1 className="text-center text-[30px]">ĐĂNG KÝ</h1>
        <div className="flex flex-col gap-4">
          <input className="px-4 py-3" placeholder="Họ tên" />
          <input className="px-4 py-3" placeholder="Số điện thoại" />
          <input className="px-4 py-3" placeholder="Email" />
          <input type="date" className="px-4 py-3" />
          <input type="password" className="px-4 py-3" placeholder="Mật khẩu" />
          <input
            type="password"
            className="px-4 py-3"
            placeholder="Nhập lại mật khẩu"
          />
          <div className="py-3 text-center bg-gray-500 rounded-md text-white">
            {" "}
            ĐĂNG KÝ
          </div>
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-green-300 text-[16px]">Đã có tài khoản? </h1>
            <h1 className="text-[16px]">Đăng nhập</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
