import Slider from "react-slick";
import kong from "../assets/images/homepage/kong.jpg"
import thanhGuom from "../assets/images/homepage/thanhguomdietquy.jpg"
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css";



const Banner = ({settings, children}) => {
    
    return (
    <Slider {...settings}>{children}
       
    </Slider>)
}
export default Banner;