import { IoTicketOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import exhuma from "../assets/images/homepage/quatmotrungma.jpg"
const FilmCard = ({type}) => {
    return (
        <div className="h-[500px] flex flex-col p-2 gap-1 w-full bg-slate-600">
              <div>
                <img className="h-180px] w-full rounded-xl" src={exhuma}/>
              </div>
                <div className="flex text-sm gap-2 text-white">
                  <h1 className="bg-red-600 rounded-md p-1"> T16</h1>
                   <h1 className="border border-yellow-200 rounded-md p-1">Phụ đề</h1>
                  <h1 className="bg-green-400 rounded-md p-1">2D</h1>
                </div>
              <h1 className="text-[20px] text-white hover:text-green-600">EXHUMA</h1>
              <div className="flex flex-row ">
              <h1 className="text-white">Thể loại phim: </h1>
              <h1 className="text-white hover:text-green-600"> Horror</h1>
              </div>
                {type === "Phim đang chiếu" ? (
                     <div className="flex flex-row gap-2">
                     <div className="bg-green-600 flex text-white w-[140px] h-[40px] rounded-md gap-1 p-1">
                     <IoTicketOutline className="text-[20px] m-[6px]"/>
                     <h1 className="p-1 text-[14px] ">Đặt vé ngay</h1>
                     </div>
                     <div className="border-green-600 bg-slate-600 border-[2px] rounded-md grid place-items-center w-[40px] h-[40px] hover:bg-green-400">
                     <CiCircleInfo className="text-[25px] m-1"/>
                     </div>
                     </div>)
                 : (<div className="flex flex-row gap-2">
                    <div className="border-green-600 bg-slate-600 border-[2px] rounded-md place-items-center flex text-white w-[200px] h-[40px] hover:bg-green-400">
                    <CiCircleInfo className="text-[25px] m-1"/>
                    <h1 className="p-1 text-[14px]">THÔNG TIN CHI TIẾT</h1>
                    </div>
                 </div>)}
            </div>
    )
    
}
export default FilmCard;