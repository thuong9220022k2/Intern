import React, { Component } from "react";
import HomeHeader from './HomeHeader'
import FlashSale from "./Section/FlashSale";
import Banner from "./Section/Banner"
import Sale from "./Section/Sale";
import Apple from "./Section/Apple";
import OutStandingPhone from "./Section/OutStandingPhone";
import HomeFooter from "./HomeFooter";
import Contact from "./Section/Contact";
import "./HomePage.scss"
class HomePage extends Component {
    render(){

        return(
            <div className="homePage-container">
                <HomeHeader/>
                <FlashSale/>
                <Banner />
                <Sale/>
                <Apple/>
                <OutStandingPhone/>
                <HomeFooter/>
                <div className="contact">
                    <Contact/>
                </div>
            </div>
        )
    }
}

export default HomePage