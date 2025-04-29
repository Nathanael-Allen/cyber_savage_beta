import { useState, useReducer, useRef, useEffect } from "react";
import { TForce, TForceViews, TUnit, TUnitID } from "../types/types";
import ComForce from "./ComForce";
import ComCharacterList from "./ComCharacterList";
import ComFullCharacter from "./ComFullCharacter";
import ComAddCharacters from "./ComAddCharacters";
import { availableUnits } from "../constants/AllUnitsList";
import forceReducer from "../reducers/forceReducer";
import ComEditMain from "./EditComponents/ComEditMain";
import Force from "../classes/Force";
import ComAlert from "./ComAlert";

type props = { forceInit: TForce, handleMainViewChange: () => void };

export default function ComForceMain({ forceInit, handleMainViewChange }: props) {
  const [force, forceDispatch] = useReducer(forceReducer, forceInit)
  const [forceView, setForceView] = useState<TForceViews>("force");
  const [focusCharacterId, setFocusCharacterId] = useState<TUnitID | null>(null);
  const [forceSaveAlert, setForceSaveAlert] = useState<string | null>(null);
  const forceAlertTimer = useRef<number>();
  
  useEffect(() => {
    if (forceSaveAlert) {
      forceAlertTimer.current = setTimeout(() => {
        setForceSaveAlert(null);
      }, 1000);
      return () => clearTimeout(forceAlertTimer.current);
    }
  }, [forceSaveAlert]);
  

  function handleViewChange(view: TForceViews, characterId?: TUnitID) {
    if (characterId) {
      setFocusCharacterId(characterId);
      console.log(Force.getCharacterById(characterId, force));
      setForceView(view);
    } else {
      setFocusCharacterId(null)
      setForceView(view);
    }
  }

  function handleSaveCharacter(character: TUnit) {
    forceDispatch({type: "updateCharacter", character: character})
    setForceView("equippedCharacters")
  }

  function handleSaveForce() {
    const allForcesJson = localStorage.getItem("forces");
    const allForces: TForce[] = allForcesJson
      ? JSON.parse(allForcesJson)
      : [];
    const updatedForces: TForce[] = allForces.filter(
        (oldForce) => oldForce.forceID !== force.forceID
      );
    
      localStorage.setItem("forces", JSON.stringify([force, ...updatedForces]));
    setForceSaveAlert("Force Saved!")
    // handleMainViewChange();
  }


  function renderViews() {
    switch (forceView) {
      case "force":
        return (
          <ComForce
            force={force}
            forceDispatch={forceDispatch}
            viewHandler={handleViewChange}
            handleSaveForce={handleSaveForce}
          />
        );
      case "addCharacters":
        return (
          <ComAddCharacters characters={availableUnits} dispatch={forceDispatch} />
        )
        break;
      case "disciplines":
        break;
      case "editCharacter":
        return <ComEditMain characterToEdit={Force.getCharacterById(focusCharacterId!, force)!} handleSaveCharacter={handleSaveCharacter} /> 
      case "equippedCharacters":
        return (
          <ComCharacterList
            characters={force.characters}
            handleViewChange={handleViewChange}
          />
        );
      case "characterDetails":
        return <ComFullCharacter character={Force.getCharacterById(focusCharacterId!, force)!}/>;
      default:
        break;
    }
  }

  return (
    <div className="">
      <div className="min-h-12 bg-slate-900">
        <button
          onClick={() => handleViewChange("force")}
          className="text-white"
        >
          force
        </button>
      </div>
      {renderViews()}
      {forceSaveAlert && <ComAlert message={forceSaveAlert} />}
    </div>
  );
}
