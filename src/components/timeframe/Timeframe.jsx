import "./Timeframe.css"
import ellipsis from "../..//assets/images/icon-ellipsis.svg"
export default function Timeframe({title , current , previous , image , bgColor}) {

    return ( 
        <div className={bgColor}>
            <h2>{title} </h2>
            <img src={ellipsis} alt="ellipsis" />
            <img src={image} alt="" />
            <p> current : {current}</p>
            <p> previous : {previous}</p>
        </div>
    )

}