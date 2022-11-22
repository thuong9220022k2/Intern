import React,{ Component } from "react";
import './Sale.scss'
import CoutDownTimer from "../SectionSupport/CountDownTimer";
import SlickSlider from "../SectionSupport/SlickSlider";
class Sale extends Component {
    
    render(){

        return(
            <>
                <div className="Sale">
                    <div className="headerSale">
                        <div className="titleSale"></div>
                        <div className="countDownSale">
                            <CoutDownTimer />
                        </div>
                    </div>
                    <div className="sliderSale">
                        <SlickSlider/>
                    </div>
                </div>
            </>
        )
    }
}

export default Sale