import "./User.css"
import jeremy from "../../assets/images/image-jeremy.png"
export default function User({daily , weekly , monthly}) {
    return ( 
        <div className="user-card">   
                <div className="user-info">
                    <img src={jeremy} alt="jeremy" className="user" />
                    <p>report for </p>
                    <h1>Jeremy</h1>
                    <h1>Robson</h1>
                </div>
                <div className="choices">
                    <p onClick={daily}  >daily</p>
                    <p onClick={weekly} >weekly</p>
                    <p onClick={monthly}>monthly</p>
                </div>
        </div>
    )

}