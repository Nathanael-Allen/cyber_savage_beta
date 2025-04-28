import { useState, useReducer } from "react";
import { TForce, TForceViews, TUnit, TUnitID } from "../types/types";
import ComForce from "./ComForce";
import ComCharacterList from "./ComCharacterList";
import ComFullCharacter from "./ComFullCharacter";
import ComAddCharacters from "./ComAddCharacters";
import { availableUnits } from "../constants/AllUnitsList";
import forceReducer from "../reducers/forceReducer";
import ComEditMain from "./EditComponents/ComEditMain";
import Force from "../classes/Force";

type props = { forceInit: TForce };

export default function ComForceMain({ forceInit }: props) {
  const [force, forceDispatch] = useReducer(forceReducer, forceInit)
  const [forceView, setForceView] = useState<TForceViews>("force");
  const [focusCharacterId, setFocusCharacterId] = useState<TUnitID | null>(null);
  

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
    </div>
  );
}
