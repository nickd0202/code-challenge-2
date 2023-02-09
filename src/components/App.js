import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planters, setPlanters] = useState([])
  const [search, setSearch] = useState("")
  const [sorted, setSorted] = useState(false)

  useEffect(() => {
  fetch('http://localhost:8003/planeteers')
  .then(r => r.json())
  .then(data => setPlanters(data))
  }, [])

  const filteredPlanters = planters.filter(planter => {
    return (
      planter.name.toLowerCase().includes(search.toLowerCase()) || planter.bio.toLowerCase().includes(search.toLowerCase())
    )
  })

  const sortedPlanters = planters.sort((planter1, planter2) => {
    return (
      planter2.born - planter1.born
    )
  })

  return (
    <div>
      <Header />
      <SearchBar setSearch={setSearch} setSorted={setSorted}/>
      <RandomButton />
      {sorted ? <PlaneteersContainer planters = {sortedPlanters}/> : <PlaneteersContainer planters={filteredPlanters} />}
    </div>
  );
}

export default App;
