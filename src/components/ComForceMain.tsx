import { useState, useReducer } from "react";
import { TForce, TForceViews, TUnit } from "../types/types";
import ComForce from "./ComForce";
import ComCharacterList from "./ComCharacterList";
import ComFullCharacter from "./ComFullCharacter";
import ComEdit from "./EditComponents/ComEditMain";
import ComAddCharacters from "./ComAddCharacters";
import { availableUnits } from "../constants/AllUnitsList";
import forceReducer from "../reducers/forceReducer";
import ComEditMain from "./EditComponents/ComEditMain";

type props = { forceInit: TForce };

export default function ComForceMain({ forceInit }: props) {
  const [force, forceDispatch] = useReducer(forceReducer, forceInit)
  const [forceView, setForceView] = useState<TForceViews>("force");
  const [focusCharacter, setFocusCharacter] = useState<TUnit | null>(null);

  function handleViewChange(view: TForceViews, character?: TUnit) {
    if (character) {
      setFocusCharacter(character);
      setForceView(view);
    } else {
      setFocusCharacter(null)
      setForceView(view);
    }
  }

  function handleSaveCharacter(character: TUnit) {
    forceDispatch({type: "updateCharacter", character: character})
    setFocusCharacter(null);
    setForceView("force")
  }


  function renderViews() {
    switch (forceView) {
      case "force":
        return (
          <ComForce
            force={force}
            forceDispatch={forceDispatch}
            viewHandler={handleViewChange}
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
        return <ComEditMain characterToEdit={focusCharacter!} handleSaveCharacter={handleSaveCharacter} /> 
      case "equippedCharacters":
        return (
          <ComCharacterList
            characters={force.characters}
            handleViewChange={handleViewChange}
          />
        );
      case "characterDetails":
        return <ComFullCharacter character={focusCharacter!} handleViewChange={handleViewChange}/>;
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
    </div>
  );
}
