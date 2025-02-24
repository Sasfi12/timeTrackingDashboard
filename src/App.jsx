import { useState } from 'react'
import './App.css'
import User from './components/user/User'
import Timeframe from './components/timeframe/Timeframe'
import data from "../public/data.json"
import social from "../public/images/icon-social.svg"
import exercise from "../public/images/icon-exercise.svg"
import play from "../public/images/icon-play.svg"
import selfCare from "../public/images/icon-self-care.svg"
import study from "../public/images/icon-study.svg"
import work from "../public/images/icon-work.svg"

function App() {
  const [currentlySelected , setCurrentlySelected] = useState("monthly") ;
  const images = [work, play , study , exercise , social , selfCare]
  const bgColors = []
  const MapTimeFrames = (
      data.map(function(e , index) {
        if(currentlySelected == "monthly")
          return (
            <Timeframe 
              key={index} 
              title={e.title} 
              current= {e.timeframes.monthly.current} 
              previous= {e.timeframes.monthly.previous} 
              image= {images[index]} />
            )
        else if(currentlySelected == "daily")
          return (
            <Timeframe 
              key={index} 
              title={e.title} 
              current= {e.timeframes.daily.current} 
              previous= {e.timeframes.daily.previous} 
              image= {images[index]} />
            )
        else if(currentlySelected == "weekly")
          return (
            <Timeframe 
              key={index} 
              title={e.title} 
              current= {e.timeframes.weekly.current} 
              previous= {e.timeframes.weekly.previous} 
              image= {images[index]} />
            )
      })
    )
  const setDaily = () => setCurrentlySelected("daily") ; 
  const setWeekly = () => setCurrentlySelected("weekly") ; 
  const setMonthly = () => setCurrentlySelected("monthly") ;
  return (
    <>
      <div className='container'>
              <User daily={setDaily} weekly={setWeekly} monthly={setMonthly} />
              <div className='cards-container'>
                {MapTimeFrames }
              </div>
      </div>
    </>
  )
}

export default App
