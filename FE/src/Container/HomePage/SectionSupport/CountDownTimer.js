import React , { useEffect , useState} from "react";

import './CoutDownTimer.scss'

const CountDownTimer = () =>{
    const [ hours1, setHours1 ] = useState(2)
    const [ hours2, setHours2 ] = useState(3)
    const [minutes1, setMinutes1 ] = useState(5)
    const [minutes2, setMinutes2 ] = useState(9);
    const [seconds1 , setSeconds1 ] = useState(5)
    const [seconds2 , setSeconds2 ] = useState(9)


    var timer;

    useEffect(()=>{
        timer = setInterval(()=>{

            setSeconds2(seconds2 -1)
            if(seconds2 === 0){
                setSeconds1(seconds1 -1)
                setSeconds2(9)

                if(seconds1 === 0 & seconds2 === 0){
                    setMinutes2( minutes2 -1)
                    setSeconds1(5)
                    setSeconds2(9)

                    if(minutes2 === 0){

                        setMinutes1(minutes1 -1)
                        setMinutes2(9)

                        if(minutes1 ===0 & minutes2 ===0){

                            setHours2(hours2 -1)
                            setMinutes1(5)
                            setMinutes2(9)

                            if(hours2 === 0){
                                setHours1(hours1 -1)
                                setHours2(9)

                                if(hours1 ===0 & hours2 === 0 & minutes1 === 0 & minutes2 ===0 & seconds1 ===0 & seconds2 ===0){
                                    setHours1(2)
                                    setHours2(3)
                                    setMinutes1(5)
                                    setMinutes2(9)
                                    setSeconds1(5)
                                    setSeconds2(9)
                                }
                            }


                        }
                    }
                }
            }

        },1000)
        return ()=> clearInterval(timer)
    })


    return (
        <>
            <div className="countdown-wrapper">

                <div className="countdown-item">
                    <div className="countdown-item-des">Giờ</div>
                    <div className="countdown-item-time">
                        <div className="item-detail">
                            <span>{hours1}</span>
                            <span>{hours2}</span>
                        </div>
                    </div>
                </div>

                <div className="countdown-item">
                    <div className="countdown-item-des">Phút </div>
                    <div className="countdown-item-time">
                        <div className="item-detail">
                            <span>{minutes1}</span>
                            <span>{minutes2}</span>
                        </div>
                    </div>
                </div>

                <div className="countdown-item">
                    <div className="countdown-item-des">Giây</div>
                    <div className="countdown-item-time">
                        <div className="item-detail">
                            <span>{seconds1}</span>
                            <span>{seconds2}</span>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )

}

export default CountDownTimer