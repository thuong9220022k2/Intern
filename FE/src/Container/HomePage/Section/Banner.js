import React,{ Component } from "react";
import './Banner.scss';
import 'font-awesome/css/font-awesome.min.css';
import sale1 from '../../../assets/Banner/Sales/sale1.png'
import sale2 from '../../../assets/Banner/Sales/sale2.png'
import sale3 from '../../../assets/Banner/Sales/sale3.png'
import anh1 from '../../../assets/Banner/SlickSlider/anh1.png'
import anh2 from '../../../assets/Banner/SlickSlider/anh1.png'
import anh3 from '../../../assets/Banner/SlickSlider/anh1.png'
import anh4 from '../../../assets/Banner/SlickSlider/anh1.png'
import anh5 from '../../../assets/Banner/SlickSlider/anh1.png'

class Banner extends Component {
     
    constructor(props){
        super(props)
        this.state = {
            id: 1,
            imgUrl : anh1
        }
    }
    
    
    render(){

       

        return(
            <>
                <div className="home-banner">
                    <div className="home-banner-menu">
                        <div className="home-menu">
                            <a href="/danh-muc/dien-thoai" className="menu-a1">
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Điện thoại</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/iphone" className='menu-a2'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Iphone</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a3'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Samsung</p> 
                                </span>                               
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a4'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Tablet</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a5'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Laptop</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a6'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Đồng hồ</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a7'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Hàng cũ</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a10'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Thu cũ</p> 
                                </span>                                
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a8'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Phụ kiện</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a9'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Sữa chữa</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a11'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Tin tức khuyễn mãi</p> 
                                </span>
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                            <a href="/danh-muc/dien-thoai" className='menu-a12'>
                                <span>
                                   <div className="banner-img"></div>
                                   <p>Góc thủ thuật</p> 
                                </span>                               
                            </a>
                                                        
                        </div>

                        <div className="home-banner-slider">
                            <div className="banner-slider">
                                <button className="btn-1"> <i class="fa fa-chevron-left" aria-hidden="true"></i> </button>
                                <div class="mySlides fade">
                                  
                                   <img className="anh-img " src={this.state.imgUrl} ></img>
                                   
                                </div>
  

                                <button className="btn-2"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>

                            </div>

                            <div className="banner-slider-title">
                                <div className="slider-title">
                                    <div className="slider-title-border"></div>
                                    <div className="slider-title-des">Đăng kí iphone 14<br/> chính hãng VNA</div>
                                </div>
                                <div className="slider-title">
                                    <div className="slider-title-border"></div>
                                    <div className="slider-title-des">Hỗ trợ bảo hành iphone 13 Pro</div>
                                </div>
                                <div className="slider-title">
                                    <div className="slider-title-border"></div>
                                    <div className="slider-title-des">Samsung chính <br/> hãng  giá tốt</div>
                                </div>
                                <div className="slider-title">
                                    <div className="slider-title-border"></div>
                                    <div className="slider-title-des">Nokia G11 Plus tặng<br/> ngay tai nghe Earbuds</div>
                                </div>
                                <div className="slider-title">
                                    <div className="slider-title-border"></div>
                                    <div className="slider-title-des">Đặt hàng oppo Reno <br/>8 series quà hấp dẫn</div>
                                </div>
                                
                            </div>

                            <div className="banner-img"></div>
                        </div>
                    </div>
                    <div className="home-banner-sale">
                        <div className="banner-img-des">KHUYẾN MÃI NỔI BẬT</div>
                        <div className="banner-img-sale1">
                            <img src={sale1} alt = "sale1"/>
                        </div>
                        <div className="banner-img-sale2">
                            <img src={sale2} alt="sale2"/>
                        </div>
                        <div className="banner-img-sale3">
                            <img src={sale3} alt = "sale3"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Banner