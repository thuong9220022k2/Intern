import React,{ Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SlickSlider.scss'
import { Data } from "./FlashSaleData";
class SlickSlider extends Component {
    
    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            variableWidth: true,
            autoplay: true,
          };

        return(
            <>
                <div className="SlickSlider">
                <Slider {...settings} >
                    {
                        Data.map((item)=>(
                             <div className="card">
                                 <div className="card-top">
                                     <img src={item.url} alt ={item.title} className="card-img"/>
                                     <div className="card-title">{item.title}</div>
                                 </div>
                                 <div className="card-bottom">
                                    <div className="card-price">
                                        <p1 className="card-price-sale">{item.priceSale} <span>đ</span></p1>
                                        <p2 className="card-price-real">{item.priceReal} <span>đ</span></p2>
                                    </div>
                                 </div>
                             </div>

                        ))
                    }
                </Slider>
                    
                </div>

            </>
        )
    }
}

export default SlickSlider