import {useState} from "react";
import "./App.css"

const App = () => {
  const [number, setNumber] = useState(0)
  let testWinningNumber = 7;

  const  handleClick =()  => {
    console.log("You clicked")
  //   generate a random number (1-10)
    let result = Math.floor(Math.random()*10+1)
    console.log("result:", result)
    setNumber(result)
  }

  const displayMessage = () =>{
    // if(testWinningNumber === 7){
    if(number === 7){
      return <h1>You win!!!!</h1>
    } else {
      return (
          <button onClick={handleClick}>Click Me to Win!!!</button>
      )
    }
  }

  return (
      <>
        <h1>Casino Clicker</h1>
        <p>Your current number is: {number}</p>
        {displayMessage()}
      </>
      )

}

export default App;