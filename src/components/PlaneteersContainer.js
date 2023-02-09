import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planters}) {

  const mappedPlanters = planters.map(planter => {
    return(
      <Planeteer name={planter.name} fromUSA={planter.fromUSA} born={planter.born} bio={planter.bio} quote={planter.quote} pictureUrl={planter.pictureUrl} twitter={planter.twitter} />
    )
  })


  return (
    <ul className="cards">
      {mappedPlanters}
    </ul>
  );
}

export default PlaneteersContainer;
