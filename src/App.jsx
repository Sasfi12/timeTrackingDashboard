import { useState } from 'react'
import './App.css'
import User from './components/user/User'
import Timeframe from './components/timeframe/Timeframe'
import data from "../public/data.json"
function App() {
  const [currentlySelected , setCurrentlySelected] = useState("monthly") ;

  const MapTimeFrames = (
      data.map(function(e , index) {
        if(currentlySelected == "monthly")
          return (
            <Timeframe key={index} title={e.title} current= {e.timeframes.monthly.current} previous= {e.timeframes.monthly.previous} />
            )
        else if(currentlySelected == "daily")
          return (
            <Timeframe key={index} title={e.title} current= {e.timeframes.daily.current} previous= {e.timeframes.daily.previous} />
            )
        else if(currentlySelected == "weekly")
          return (
            <Timeframe key={index} title={e.title} current= {e.timeframes.weekly.current} previous= {e.timeframes.weekly.previous} />
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
