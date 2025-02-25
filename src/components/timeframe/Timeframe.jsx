import "./Timeframe.css"
import ellipsis from "../../assets/images/icon-ellipsis.svg"
export default function Timeframe({ title, current, previous, image, bgColor }) {

    return (
        <div className={`${bgColor} timeframe`}>

            <div className="timeframe-image-container">
                <img src={image} alt={`${title.toLowerCase()} logo`} />
            </div>
            <div className="timeframe-text-container">
                <div className="timeframe-title"><h2>{title} </h2><img src={ellipsis} alt="ellipsis" /></div>

                <h1>{current}hrs</h1>
                <p>Last Week - {previous}hrs</p>
            </div>
        </div>
    )

}