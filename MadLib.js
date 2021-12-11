import React, { useState } from "react";
import NewMadLibForm from "./NewMadLibForm";
import { v4 as uuid } from "uuid";

function createMadLib(noun1,noun2,adjective,color){
  return `There was a ${color} ${noun1} who loved a ${adjective} ${noun2}`;
}


function MadLib() {
  const [item, setItem] = useState({});

  const renderItems = () => {
    return (

      <div>{createMadLib(item.noun1,item.noun2,item.adjective,item.color)}</div>
      
    );
  };




  // end renderItems

  /** Add new item object to cart. */
  const addItem = function(item){
    setItem(item);
  }
  
  
  //()=>{setItem(item)};
  // end addItem

  return (
    <div className="MadLib">
      <NewMadLibForm addItem={addItem} />
      {renderItems()}
    </div>
  );
};
// end

export default MadLib;
