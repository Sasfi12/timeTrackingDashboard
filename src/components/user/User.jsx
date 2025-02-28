import "./User.css"
import jeremy from "../../assets/images/image-jeremy.png"
export default function User({newTimeframe}) {
    return ( 
        <div className="user-card">   
                <div className="user-info">
                    <img src={jeremy} alt="jeremy" className="user" />
                    <p>report for </p>
                    <h1>Jeremy</h1>
                    <h1>Robson</h1>
                </div>
                <div className="choices">
                    <div className="choice-container"><p className="choice" onClick={() => newTimeframe("daily")}  >Daily</p>  </div>
                    <div className="choice-container"><p className="choice" onClick={() => newTimeframe("weekly")} >Weekly</p>  </div>
                    <div className="choice-container"><p className="choice" onClick={() => newTimeframe("monthly")}>Monthly</p>  </div>
                </div>
        </div>
    )

}