import React,{ Component } from "react";
import BodyApple from "../SectionSupport/BodyApple";
import "./Apple.scss"
class Apple extends Component {
    
    
    render(){

        return(
            <>
            <div className="Apple">
                <div className="menu-header-apple">
                    <div className="header-apple-title">
                       <p> Apple -Authorised Reseller</p>
                    </div>
                    <div className="header-apple-scroll">
                        <a href="/danh-muc/iphone-14-series">Iphone 14 Series</a>
                        <a href="/danh-muc/iphone-13-series">Iphone 13 Series</a>
                        <a href="/danh-muc/iphone-12-series">Iphone 12 Series</a>
                        <a href="/danh-muc/iphone-11-news">Iphone 11 Mới</a>
                        <a href="/danh-muc/iPad">Ipad</a>
                        <a href="/danh-muc/apple-watch">Apple-watch</a>
                        <a href="/danh-muc/macbook">Macbook</a>
                    </div>
                </div>
                <div className="body-apple">
                    <BodyApple/>
                </div>
            </div>

            </>
        )
    }
}

export default Apple