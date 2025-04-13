import { useState } from "react";
import { TForce, TForceViews, TUnit } from "../types/types";
import ComForce from "./ComForce";
import ComCharacterList from "./ComCharacterList";
import ComFullCharacter from "./ComFullCharacter";
import ComEditMain from "./EditComponents/ComEditMenu";
import ComEdit from "./EditComponents/ComEditMain";

type props = { force: TForce };

export default function ComForceMain({ force }: props) {
  // const [force, forceDispatch] = useReducer()
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

  function dispatch() {
    return;
  }

  function renderViews() {
    switch (forceView) {
      case "force":
        return (
          <ComForce
            force={force}
            forceDispatch={dispatch}
            viewHandler={handleViewChange}
          />
        );
      case "addCharacters":
        break;
      case "disciplines":
        break;
      case "editCharacter":
        return <ComEdit characterToEdit={focusCharacter!} /> 
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
