import React , { useEffect , useState} from "react";
import axios from "../../../axios";
import "./BodyApple.scss"
export default function BodyApple() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        axios.get("http://localhost:3030/api/get-apple").then((data) => {
        setData(data);
      });
    }, []);
    console.log(data);
    
    return (
      <div className="bodyApple">
           {
            data.map((item)=>(
                 <div className="card">
                     <div className="card-top">
                         <img src={item.URL} alt ={item.DesImg} className="card-img"/>
                         <div className="card-title">{item.DesImg}</div>
                     </div>
                     <div className="card-bottom">
                        <div className="card-price">
                            <p1 className="card-price-sale">{item.PriceSale} <span>đ</span></p1>
                            <p2 className="card-price-real">{item.PriceReal} <span>đ</span></p2>
                        </div>
                     </div>
                 </div>

            ))
        }
            
      </div>
    );
  }