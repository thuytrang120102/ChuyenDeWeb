import logo from "../assets/images/logo.png";
const LoginPage = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="bg-gray-50 flex flex-col p-7 w-[500px] gap-5 rounded-md">
        <img className="w-40 items-center mx-auto" src={logo} />
        <h1 className="text-center text-[30px]">ĐĂNG NHẬP</h1>
        <div className="flex flex-col gap-4">
          <input className="px-4 py-3" placeholder="Email hoặc số điện thoại" />
          <input type="password" className="px-4 py-3" placeholder="Mật khẩu" />
          <div className="py-3 text-center bg-gray-500 rounded-md text-white">
            ĐĂNG NHẬP
          </div>
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-green-300 text-[16px]">Bạn quên mật khẩu? </h1>
            <h1 className="text-[16px]">Chưa có tài khoản?</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
