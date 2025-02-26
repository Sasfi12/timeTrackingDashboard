import { useState } from 'react'
import './App.css'
import User from './components/user/User'
import Timeframe from './components/timeframe/Timeframe'
import data from "../public/data/data.json"
import social from "./assets/images/icon-social.svg"
import exercise from "./assets/images/icon-exercise.svg"
import play from "./assets/images/icon-play.svg"
import selfCare from "./assets/images/icon-self-care.svg"
import study from "./assets/images/icon-study.svg"
import work from "./assets/images/icon-work.svg"


function App() {
  const [currentlySelected , setCurrentlySelected] = useState("monthly") ;
  const images = [work, play , study , exercise , social , selfCare]
  const bgColors = ["work" , "play" , "study", "exercise" , "social" , "self-care"]
  const MapTimeFrames = (
      data.map(function(e , index) {
        if(currentlySelected == "monthly")
          return (
            <Timeframe 
              key={index} 
              title={e.title} 
              current= {e.timeframes.monthly.current} 
              previous= {`Month - ${e.timeframes.monthly.previous}`} 
              image= {images[index]}
              bgColor= {bgColors[index]}
              />
            )
        else if(currentlySelected == "daily")
          return (
            <Timeframe 
              key={index} 
              title={e.title} 
              current= {e.timeframes.daily.current} 
              previous= {`Day - ${e.timeframes.daily.previous}`} 
              image= {images[index]}
              bgColor= {bgColors[index]}    
              />
            )
        else if(currentlySelected == "weekly")
          return (
            <Timeframe 
              key={index} 
              title={e.title} 
              current= {e.timeframes.weekly.current} 
              previous= {`Week - ${e.timeframes.weekly.previous}`} 
              image= {images[index]}
              bgColor= {bgColors[index]}
              />
            )
      })
    )
  const setDaily = () => setCurrentlySelected("daily") ; 
  const setWeekly = () => setCurrentlySelected("weekly") ; 
  const setMonthly = () => setCurrentlySelected("monthly") ;
  return (
    <>
      <div className='container'>
              <User daily={setDaily} 
                    weekly={setWeekly} 
                    monthly={setMonthly} />
              <div className='cards-container'>
                {MapTimeFrames}
              </div>
      </div>
    </>
  )
}

export default App
