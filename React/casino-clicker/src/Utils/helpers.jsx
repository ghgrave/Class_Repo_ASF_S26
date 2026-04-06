export const displayMessage = (doggy, func) =>{
    console.log("Display message from separate file")
    if(doggy === 7){
        return <h1>You win!!!!</h1>
    } else {
        return (
            <button onClick={func}>Click Me to Win!!!</button>
        )
    }
}

// implied return
export const randomNumber = () => Math.floor(Math.random()*10+1)


