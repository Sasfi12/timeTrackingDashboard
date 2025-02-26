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
  const [currentlySelected, setCurrentlySelected] = useState("monthly");
  const images = [work, play, study, exercise, social, selfCare]
  const bgColors = ["work", "play", "study", "exercise", "social", "self-care"]
  const setDaily = () => setCurrentlySelected("daily"), setWeekly = () => setCurrentlySelected("weekly") ,  setMonthly = () => setCurrentlySelected("monthly")
  return (
    <>
      <div className='container'>
        <User daily={setDaily}
          weekly={setWeekly}
          monthly={setMonthly} />
        <div className='cards-container'>
          { data.map(function (e, index) {
          return (
            <Timeframe
              key={index}
              title={e.title}
              current={e.timeframes[currentlySelected].current}
              previous={`Day - ${e.timeframes[currentlySelected].previous}`}
              image={images[index]}
              bgColor={bgColors[index]}
            />
          )
    }
    )}
        </div>
      </div>
    </>
  )
}

export default App
