import Slider from "react-slick";
import kong from "../assets/images/homepage/kong.jpg"
import thanhGuom from "../assets/images/homepage/thanhguomdietquy.jpg"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css";



const Banner = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
    <Slider {...settings}>
        <img className="w-full h-[450px] object-fill" src={kong} alt="" /> 
        <img className="w-full h-[450px] object-fill" src={thanhGuom} alt="" /> 
        <img className="w-full h-[450px] object-fill" src={kong} alt="" /> 
        <img className="w-full h-[450px] object-fill" src={thanhGuom} alt="" /> 
        <img className="w-full h-[450px] object-fill" src={kong} alt="" /> 
    </Slider>)
}
export default Banner;