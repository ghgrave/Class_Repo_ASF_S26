




// components
const AnimalLover = ({animalArray, menuItems}) => {

let results =  animalArray.map((data, index)=>{
    return <li key={index}>{data}</li>
    }
)

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    });

    let menuCards = menuItems.map( (kitty, index) => {
        let theStyles =
            {border: "3px blue solid",
            width: "50%",
            margin: "1rem auto",
            boxShadow: "3px 3px 5px black"}
        let {title, imgSrc, description, price, category} = kitty
        return (
            <div key={index} style={theStyles}>
                <h2>{title}</h2>
                <img src={imgSrc} alt={title}/>
                <p>{description}</p>
                <p>{formatter.format(price)}</p>
                <p>{category}</p>
            </div>
        )
        }
    )



    return(
        <>
            <ul>
                {results}
            </ul>
            {menuCards}
        </>

    )
}

export default AnimalLover;