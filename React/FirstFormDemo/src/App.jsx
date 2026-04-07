import {useState} from "react";


const App = () => {
  const initialData = {
    fname: "",
    password: "",
    age: 0
  }
  const [data, setData] = useState(initialData)

  const handleChange = (event) => {

    setData({
      ...data, // spread operator!!!! otherwise your previous data gets overwritten.
      [event.target.name]: event.target.value // update current keys with new values
    })
    console.log(data)
  }

  const handleSubmit = (evt) =>{
    evt.preventDefault()
    console.log(data)
    let options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }

    }
    // eventually, this will be used to send data to server and deal with results of that req-res cycle.
    // fetch(endpoint, options)
    //     .then(response)
    //     .then(parsedData)
    //     .catch(errs)

    // resets data to initial values
    setData(initialData)
  }
  return (
      <>
        <form onSubmit={handleSubmit} method="post">
          <label>First Name:
            <input
                type="text"
                onChange={handleChange}
                name="fname"
                value={data.fname}
                autoComplete={"off"}
                required
                maxLength={3}
            />
          </label>
          <br/>
          <label>Password:
            <input
                type="password"
                onChange={handleChange}
                name="password"
                value={data.password}
                pattern={"123"}
                minLength={3}
            />
          </label>
            <br/>
          <label>Age:
            <input
                type="num"
                onChange={handleChange}
                name="age"
                value={data.age}
                min={21}
                max={99}
            />
          </label>
          <br/>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </>

  )
}


export default App;