import React,{ Component } from "react";
import BodyOutStandingPhone from "../SectionSupport/BodyOutStandingPhone";
import "./OutStandingPhone.scss"
class OutStandingPhone extends Component {
    
    
    render(){

        return(
            <>
            <div className="OutStandingPhone">
                <div className="menu-header-OutStandingPhone">
                    <div className="header-OutStandingPhone-title">
                       <p> Điện Thoại Nổi Bật</p>
                    </div>
                    <div className="header-OutStandingPhone-scroll">
                        <a href="/danh-muc/dien-thoai-noi-bat/iphone">Iphone </a>
                        <a href="/danh-muc/dien-thoai-noi-bat/samsung">Samsung</a>
                        <a href="/danh-muc/dien-thoai-noi-bat/xiaomi">Xiaomi</a>
                        <a href="/danh-muc/dien-thoai-noi-bat/realme">Realme</a>
                        <a href="/danh-muc/dien-thoai-noi-bat/oppo">Oppo</a>
                        <a href="/danh-muc/dien-thoai-noi-bat/nokia">Nokia</a>
                        <a href="/danh-muc/dien-thoai-noi-bat/hang-cu">Hàng Cũ</a>
                    </div>
                </div>
                <div className="body-OutStandingPhone">
                    <BodyOutStandingPhone/>
                    
                </div>
            </div>

            </>
        )
    }
}

export default OutStandingPhone