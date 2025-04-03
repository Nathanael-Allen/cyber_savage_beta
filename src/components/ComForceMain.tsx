import { useState } from "react";
import Force from "../classes/Force";
import { TForce, TForceViews } from "../types/types";
import ComForce from "./ComForce";

type props = {force: TForce}

export default function ComForceMain({force}: props) {
  // const [force, forceDispatch] = useReducer()
  const [forceView, setForceView] = useState<TForceViews>("force"); 
  
  function dispatch() {
    return;
  }
  
  function renderViews() {
    switch (forceView) {
      case "force":
        return <ComForce force={force} dispatch={dispatch} />
      case "addUnits":
        break;
      case "disciplines":
        break
      case "editUnit":
        break;
      case "equippedUnits":
        break
      default:
        break
    }
  }
  
  return (
    <div>
      {renderViews()}
    </div>
  )
}