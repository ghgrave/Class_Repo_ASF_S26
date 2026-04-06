import {useState} from "react";
import "./App.css"
import {displayMessage, randomNumber} from "./Utils/helpers.jsx";

const App = () => {
  const [number, setNumber] = useState(0)
    const [isWinner, setIsWinner]  = useState(false)
  let testWinningNumber = 7;


  const  handleClick =()  => {
  //   generate a random number (1-10)
    let result = randomNumber()
    console.log("result:", result)
        setNumber(result)
      setIsWinner(number === 7 )
  }

  return (
      <>
        <h1>Casino Clicker</h1>
        <p>Your current number is: {number}</p>
        {/*{displayMessage(number, handleClick)}*/}
          {isWinner ? <h2>Winner</h2> :  <button onClick={handleClick}>Click Me to Win!!!</button>}
      </>
      )
}

export default App;