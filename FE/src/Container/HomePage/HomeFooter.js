import React,{ Component } from "react";
import "./HomeFooter.scss"
import 'font-awesome/css/font-awesome.min.css';
import dathongbao from "./../../assets/Footer/dathongbao.png"
import dmca from "./../../assets/Footer/dmca.png"

class HomeFooter extends Component {
    

    render(){

        return(
           <div className="footer">
                <div className="home-footer">
                <div className="footer-policy">
                    <ul>
                       <li>Chính sách bảo hành</li>
                       <li>Chính sách bảo hành iPhone - iPad</li>
                       <li>Bảo hành Xiaomi chính hãng</li>
                       <li>Chính sách mua hàng online</li>
                       <li>Mua hàng trả góp</li>
                       <li>Chính sách bảo mật thông tin khách hàng</li>
                    </ul>
                </div>

                <div className="footer-support">
                    <span> Tổng đài hỗ trợ (Từ 8:00-21:00)</span>
                    <ul>
                        <li>
                            <p>Hotline bán hàng</p>
                            <h5>0966.06.2468 | 1900.633.471</h5>
                        </li>
                        <li>
                            <p>Hotline bảo hành , kỹ thuật</p>
                            <h5>1900.633.471</h5>
                        </li>
                        <li>
                            <p>Hotline hỗ trợ phần mềm</p>
                            <h5>0906.282.4422</h5>
                        </li>

                    </ul>
                    <div className="footer-service">
                        <p>Hotline phản ánh chất lượng dịch vụ</p>
                        <h2>1900.633.471</h2>
                    </div>

                </div>
                <div className="footer-addrress">
                    <div className="footer-region">
                        <ul>
                            <li className="north">
                                <p>Khu vực:</p>
                                <h5>Miền Bắc</h5>
                            </li>
                            <li className="central">
                                <p>Khu vực:</p>
                                <h5>Miền Trung</h5>
                            </li>
                            <li className="south">
                                <p>Khu vực:</p>
                                <h5>Miền Nam</h5>
                            </li>
                        </ul>
                    </div>
                    <div className="addrress">
                        <div className="north-addrress">
                            <ul>
                                <li>
                                   <i className="fa-solid fa-location-dot"></i>
                                   <p>111 Trần Đăng Ninh, Cầu Giấy, Hà Nội.</p>
                                   <span>0976.73.2468</span>
                                </li>
                                <li>
                                   <i class="fa-solid fa-location-dot"></i>
                                   <p>446 Xã Đàn, Đống Đa, Hà Nội.</p>
                                   <span>096.111.2468</span>
                                </li>
                                <li>
                                   <i class="fa-solid fa-location-dot"></i>
                                   <p>118 Thái Hà, Đống Đa, Hà Nội.</p>
                                   <span>096.424.2468</span>
                                </li>
                                <li>
                                   <i class="fa-solid fa-location-dot"></i>
                                   <p>312 Nguyễn Trãi,P.Trung Văn </p>
                                   <span>094.698.2468</span>
                                </li>
                                <li>
                                   <i class="fa-solid fa-location-dot"></i>
                                   <p>380 Trần Phú, Ba Đình, TP.Thanh Hóa</p>
                                   <span>0969.14.2468</span>
                                </li>
                                
                            </ul>
                                

                        </div>
                    </div>

                </div>
                <div className="footer-image">
                    <div className="footer-image-icon">
                        <div className="image-icon facebook">
                           <i class="fa fa-facebook" aria-hidden="true"></i>
                           <span>Facebook</span>
                        </div>
                        <div className="image-icon youtube">
                           <i class="fa fa-youtube-play" aria-hidden="true"></i>    
                           <span>Youtube</span>
                        </div>
                    </div>
                    <div className="image">
                        <img src={dathongbao} alt="dathongbao"/>
                        <img src={dmca} alt="dmcs"/>                      
                    </div>

                </div>
            </div>


           </div>
          

        )
    }
}

export default HomeFooter