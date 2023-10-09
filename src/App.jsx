import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/welcome'
import Game from './components/game'
import Result from './components/result'
import { Route, Routes } from 'react-router-dom'

function App() {
const [score, setScore] = useState(0);


const restartQuiz = () => {
  setScore(0);
  //setCurrentScreen(WELCOME);
}

/* switch(currentScreen) {
  case WELCOME:
  content = <Welcome nextScreen={() => setCurrentScreen(GAME)}/>;
  break;

  case GAME:
  content = <Game answeredCorrectly={() => setScore(score + 1)} showResult={() => setCurrentScreen(RESULT)}/>;
  break;

  case RESULT:
  content = <Result score={score} restartQuiz={restartQuiz}/>
  break;

  default:
  content = <Welcome/>
} */


  return (
    <div className='App'>
      <Routes>
        <Route path='/'
          element= {<Welcome/>} />
        <Route path='/game'
          element= {<Game answeredCorrectly={() => setScore(score + 1)} />} />
          <Route path='/game/:currentquestion'
          element= {<Game answeredCorrectly={() => setScore(score + 1)} />} />
          <Route path='/result'
          element= {<Result score={score}/>} />
      </Routes>
    </div>
  )
}

export default App
