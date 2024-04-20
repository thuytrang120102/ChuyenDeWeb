import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import screen from "../assets/images/SeatSelecting/screen-thumb.png";
import { IoIosArrowRoundBack } from "react-icons/io";
const SeatSelectingPage = () => {
  return (
    <>
      <Header />
      <CategoryBar />
      <div className="max-w-7xl mx-auto pb-8">
        <h1 className="text-white text-[40px] text-center pb-8">Chọn ghế</h1>
        <div className="flex gap-8 items-center">
          <div className="w-2/3 flex flex-col items-center gap-8">
            <img className="pt-4 " src={screen} alt="" />
            <h1 className="text-white text-center text-[40px]"> MÀN HÌNH</h1>
            <div className="flex-col flex gap-2 ">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="flex gap-2">
                  {Array.from({ length: 12 }, (_, j) => (
                    <div
                      key={j}
                      className="w-8 h-7 border border-gray-100 text-gray-100 text-[12px] flex justify-center items-center "
                    >
                      {String.fromCharCode(65 + i)}
                      {j + 1}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 gap-x-8">
              <div className="flex gap-2">
                <div className="w-7 h-7 bg-red-500"></div>
                <h1 className="text-[18px]">Đang chọn</h1>
              </div>
              <div className="flex gap-2">
                <div className="w-7 h-7 bg-gray-400"></div>
                <h1 className="text-[18px]">Đã bán</h1>
              </div>
              <div className="flex gap-2">
                <div className="w-7 h-7 bg-gray-400 text-white text-center">
                  X
                </div>
                <h1 className="text-[18px]">Không thể chọn</h1>
              </div>
              <div className="flex gap-2">
                <div className="w-7 h-7 border-gray-900 border"> </div>
                <h1 className="text-[18px]">Ghế trống</h1>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex flex-col border border-gray-500 rounded-lg h-fit">
            <div className="flex flex-col gap-2 border-b border-gray-500 p-4">
              <h1 className="text-white text-[28px]">BHD Star Le Van Viet</h1>
              <h2 className="text-white text-[16px]">
                Screen 3 - 5/4/2024 - Suất chiếu: 20h15
              </h2>
            </div>
            <div className="flex flex-col gap-3 p-4 border-b border-gray-500">
              <h1 className="text-green-500 text-[35px]">KUNG FU PANDA 4</h1>
              <div className="flex gap-2 text-white">
                <h1 className="border border-yellow-200 text-[18px] whitespace-nowrap rounded-md p-1 cursor-pointer">
                  Tình cảm
                </h1>
                <h1 className="bg-green-400 text-[18px] rounded-md p-1 cursor-pointer">
                  2D
                </h1>
              </div>
              <div className="flex justify-between items-center ">
                <div className="flex flex-col text-white text-[18px]">
                  <h1> 2 vé </h1>
                  <h1>C10, C11</h1>
                </div>
                <h1 className="text-white text-[18px]">100.000 VND</h1>
              </div>
            </div>
            <div>
              <div className="flex justify-between p-4 gap-2">
                <h1 className="text-white text-[25px]">Tổng tiền</h1>
                <h1 className="text-white text-[25px]">100.000 VND</h1>
              </div>
              <div className="border-green-400 border bg-green-500 text-white p-2 text-[22px] text-center rounded-md mx-5">
                THANH TOÁN
              </div>
              <div className="flex justify-center items-center gap-2 p-4">
                <IoIosArrowRoundBack className="text-white text-[24px]" />
                <h1 className="text-white text-[18px]">Trở lại</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SeatSelectingPage;
