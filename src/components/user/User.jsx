import "./User.css"
export default function User({daily , weekly , monthly}) {

    return ( 
        <div>
                <h1></h1>
                <p onClick={daily}  >daily</p>
                <p onClick={weekly} >weekly</p>
                <p onClick={monthly}>monthly</p>
        </div>
    )

}