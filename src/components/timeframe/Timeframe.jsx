import "./Timeframe.css"
export default function Timeframe({title , current , previous , image}) {

    return ( 
        <div>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <p> current : {current}</p>
            <p> previous : {previous}</p>
        </div>
    )

}