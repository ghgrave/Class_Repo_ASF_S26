
import {Button, Image} from 'react-bootstrap'

import {useState, useEffect} from "react"

const App = () => {
  // set up state
  // let initialSrcValue = "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_2156.jpg"
  const [imgPath, setImgPath] = useState("")

// useEffect(cb, dependencies)
  useEffect(()=>{
    let endpoint = "https://dog.ceo/api/breeds/image/random"
    fetch(endpoint)
        .then(response => {
          if(response.ok){
            return response.json()
          } else {
            throw Error("Peter says you are HIRED!!!")
          }
        })
        .then(parsedData => {
          console.log(parsedData.message)
          // do NOT directly mutate (change) data
          // use constructor!!
          setImgPath(parsedData.message)
        })
        .catch(errs => {
          console.log(errs)
        })
  }, [])

  const handleClick = () => {
    console.log("Clicked!!!")
    let endpoint = "https://dog.ceo/api/breeds/image/random"
    fetch(endpoint)
        .then(response => {
          if(response.ok){
           return response.json()
          } else {
            throw Error("Peter says you are F-I-R-E-D!!!")
          }
        })
        .then(parsedData => {
          console.log(parsedData.message)
          // do NOT directly mutate (change) data
          // use constructor!!
          setImgPath(parsedData.message)
        })
        .catch(errs => {
          console.log(errs)
        })
  }
  return (
      <>
        <h1 >Dog Image Generator</h1>
          <Button variant="danger">Danger</Button>
        <button onClick={handleClick}>Click for Random Image</button>
        {/*<img src={imgPath} alt=""/>*/}
          <Image src={imgPath}  roundedCircle />
      </>
  )
}

export default App;