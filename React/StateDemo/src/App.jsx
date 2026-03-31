import {useState} from "react"


// user tyopes in input
// clicks button to see passowrd
// clciks button to hide password


const App = () => {

  const person = {
    fname: "",
    lname: "",
    age: 24,
  }
  // useState returns an array of two elements
  // first element is the actual variable with an initial value
  // second element is function that changes state
  const [inputType, setInputType] = useState(person)

  const handleClick = (event) => {
    event.preventDefault()
    // let result = !inputType
    setInputType(!inputType)
    console.log("Clicked!!!!")
  }

  return (
      <>
        <h1>I am the App Comp of State</h1>
        <form action="">
          <label htmlFor="">Password:
            <input type={inputType ? "text" : "password"}/>
          </label>
          <button onClick={handleClick}>Show/Hide</button>
        </form>
      </>
  )
}

export default App;