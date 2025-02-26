import "./Timeframe.css"
import ellipsis from "../../assets/images/icon-ellipsis.svg"
export default function Timeframe({ title, current, previous, image, bgColor }) {

    return (
        <div className={`${bgColor} timeframe`}>

            <div className="timeframe-image-container">
                <img src={image} alt={`${title.toLowerCase()} logo`} />
            </div>
            <div className="timeframe-text-container">
                <div className="timeframe-title"><h4>{title} </h4><img src={ellipsis} alt="ellipsis" /></div>
                <div className="timeframe-previous-current">
                    <h1 className="timeframe-current">{current}hrs</h1>
                    <p className="timeframe-previous">Last {previous}hrs</p>
                </div>
            </div>
        </div>
    )

}