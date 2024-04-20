import logo from "../assets/images/logo.png";
const ForgotPasswordPage = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="bg-gray-50 flex flex-col p-7 w-[500px] gap-5 rounded-md">
        <img className="w-40 items-center mx-auto" src={logo} />
        <h1 className="text-center text-[30px]">QUÊN MẬT KHẨU</h1>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <input
              className="px-4 py-3 w-full"
              placeholder="Email hoặc số điện thoại"
            />
            <div className="text-center bg-green-300 text-nowrap px-5 grid place-items-center">
              GỬI MÃ
            </div>
          </div>
          <input
            type="password"
            className="px-4 py-3"
            placeholder="Nhập mã xác nhận"
          />
          <input
            type="password"
            className="px-4 py-3"
            placeholder="Mật khẩu mới"
          />
          <input
            type="password"
            className="px-4 py-3"
            placeholder="Nhập lại mật khẩu mới"
          />
          <div className="py-3 text-center bg-gray-500 rounded-md text-white">
            ĐỔI MẬT KHẨU
          </div>
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-green-300 text-[16px]">Quay lại </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordPage;
