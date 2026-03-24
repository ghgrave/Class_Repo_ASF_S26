import AnimalLover from "./components/AnimalLover"
import {animals, MENU_ITEMS} from "./utils/data.js"


// components
const App = () => {
  return (
      <>
        <h1>My Component</h1>
        <AnimalLover
            data={"JM love animals!!!"}
            kittyCat_doggy={"Weird ass animals!!!!"}
            sneeze = {false}
            animalArray = {animals}
            menuItems = {MENU_ITEMS}
        />
      </>

  )
}

export default App;