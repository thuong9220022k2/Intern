import React, { Component } from "react";
import './HomeHeader.scss'

class HomeHeader extends Component {
    render(){

        return (
            <>
               <div className="home-header-container">
                    <div className="home-header-container-logo">                    
                    </div>
                    <div className="home-header-container-search">
                        <form>
                            <div className="ex-search">
                                <input type='text' placeholder="Bạn cần tìm gì ..." className="ex-search-input"></input>
                                <input type='hidden' name='post-type' value='product'></input>
                                <button id='btn-search'>
                                    <svg width='18' height='18' viewBox = ' 0 0 16 16' >
                                    <path d="M15.504 13.616l-3.79-3.223c-0.392-0.353-0.811-0.514-1.149-0.499 0.895-1.048 1.435-2.407 1.435-3.893 0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6c1.486 0 2.845-0.54 3.893-1.435-0.016 0.338 0.146 0.757 0.499 1.149l3.223 3.79c0.552 0.613 1.453 0.665 2.003 0.115s0.498-1.452-0.115-2.003zM6 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"></path>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="home-header-container-area">
                        <button>
                            <div className="region1">Khu vực của bạn</div>
                            <div className='region2'>Miền Bắc</div>
                            
                        </button>
                    </div>
                    <div className="home-header-container-contact">
                        <a href='/hotline' className="contact-hotline">
                            <span className="hotline">
                                <svg width='20' height='20' viewBox="0 0 24 24">
                                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </span>
                            <div className='title1'>Hotline mua hàng</div> 
                            <div className='title2'>096.606.2468</div> 
                        </a>
                        <a href='/thanh-toan' className="contact-hotline">
                            <span className="hotline">
                                <svg width='20' height='20' viewBox="0 0 208 208">
                                <path d="m190.85 200.23-12.715-141.6c-0.347-3.867-3.588-6.829-7.47-6.829h-26.221v-11.826c0-22.04-17.93-39.971-39.969-39.971-22.038 0-39.966 17.931-39.966 39.971v11.826h-26.239c-3.882 0-7.123 2.962-7.47 6.829l-12.765 142.16c-0.188 2.098 0.514 4.177 1.935 5.731s3.43 2.439 5.535 2.439h157.93 0.02c4.143 0 7.5-3.358 7.5-7.5-1e-3 -0.417-0.035-0.828-0.101-1.227zm-111.34-160.26c0-13.769 11.2-24.971 24.967-24.971 13.768 0 24.969 11.202 24.969 24.971v11.826h-49.936v-11.826zm-45.8 153.98 11.418-127.16h19.382v13.412c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-13.412h49.936v13.412c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-13.412h19.364l11.418 127.16h-141.52z"></path>
                                </svg>
                            </span>
                            <div className='title1'>Chi tiết</div> 
                            <div className='title2'>Giỏ hàng</div> 
                        </a>
                        <a href='/chinh-sach-bao-hanh' className="contact-hotline">
                            <span className="hotline">
                                <svg width='20' height='20' viewBox="0 0 187 187">
                                <path d="m118.3 76c-7.1 7.2-14.5 14.1-21.3 21.5-3.1 3.3-4.9 3-7.5-0.2-2.3-2.8-5.2-5.3-7.9-7.8-1.9-1.7-4.2-1.8-6.3-0.6-1.6 0.9-2.7 2.5-2.7 4.6 0 3.4 17.3 20.9 20.7 20.9 2.5-0.1 4.1-1.7 5.7-3.3 9-9 18-18.1 27.1-27.1 2.8-2.8 5.2-5.9 1.7-9.5-3.6-3.7-6.7-1.3-9.5 1.5z"></path>
                                <path d="m167 43.2c-0.1-4.5-3.2-5.8-7.2-5.8-20.7-0.3-39.2-6.4-54.5-20.9-2.9-2.7-5.9-2.7-8.7 0-15.3 14.5-33.8 20.6-54.6 20.8-5.3 0.1-7.3 2.8-7.3 7.8 0.1 7.2 0 14.4 0 21.6h-0.6c0.4 7.8 0.7 15.6 1.3 23.4 3.1 39.9 23 67.2 60.8 81.1 2.3 0.8 4.5 1.9 7.1 0.9 28.1-10.3 49.5-27.4 58.3-57.2 7.2-23.5 6.1-47.6 5.4-71.7zm-10.6 10.2c-0.3 5.1-0.1 10.3-0.1 15.4-0.3 19.8-1 39.5-11 57.4-9.5 17-24.5 27.2-42.2 34.2-2.3 0.9-3.9 0-5.8-0.7-31.3-12.2-47.8-35.4-50.7-68.6-1.1-12.7-1-25.5-1-38.2 0-3.8 1.4-4.9 5-5.1 17.7-1 33.7-6.7 47.5-18 2.1-1.8 3.6-1.9 5.7-0.1 13.8 11.4 29.8 17.1 47.5 18.1 4.2 0.1 5.3 1.8 5.1 5.6z"></path>
                                </svg>
                            </span>
                            <div className='title1'>Chính sách</div> 
                            <div className='title2'>Bảo hành</div> 
                        </a>
                        <a href='/thong-tin' className="contact-hotline">
                            <span className="hotline">
                                <svg width='20' height='20' viewBox="0 0 64 64">
                                <path d="M41.2452,33.0349a16,16,0,1,0-18.49,0A26.0412,26.0412,0,0,0,4,58a2,2,0,0,0,2,2H58a2,2,0,0,0,2-2A26.0412,26.0412,0,0,0,41.2452,33.0349ZM20,20A12,12,0,1,1,32,32,12.0137,12.0137,0,0,1,20,20ZM8.09,56A22.0293,22.0293,0,0,1,30,36h4A22.0293,22.0293,0,0,1,55.91,56Z"></path>
                                </svg>
                            </span>
                            <div className='title1'>Thông tin</div> 
                            <div className='title2'>Tài khoản</div> 
                        </a>
                    </div>
               </div>
            </>
        )
    }
}

export default HomeHeader