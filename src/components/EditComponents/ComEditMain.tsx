import { TUnit, TEditViews } from "../../types/types";
import ComEditChars from "./ComEditChars";
import { useEffect, useReducer, useState } from "react";
import editReducer from "../../reducers/editReducer";
import ComEditSpells from "./ComEditSpells";
import ComEditWeaponsList from "./ComEditWeaponsList";
import { TForceAction } from "../../reducers/forceReducer";
import ComEditMenu from "./ComEditMenu";
import Force from "../../classes/Force";

type props = { characterToEdit: TUnit, handleSaveCharacter: (character: TUnit) => void };

export default function ComEditMain({ characterToEdit, handleSaveCharacter }: props) {
  // CONSTANTS
  
  // STATE
  const [view, setView] = useState<TEditViews>("main");
  const [character, charDispatch] = useReducer(editReducer, characterToEdit);

  useEffect(() => {
    
  }, [character])

  // FUNCTIONS
  useEffect(() => {
    window.scrollTo(0,0)
  }, [view])
  
  function renderViews() {
  switch (view) {
      case "main":
        return (<ComEditMenu character={character} handleEditViewChange={setView} handleSaveCharacter={handleSaveCharacter} />);
      case "characteristics":
        return (<ComEditChars dispatch={charDispatch} equippedChars={character.equippedCharacteristics} handleEditViewChange={setView} />);
      case "spells":
        return <ComEditSpells dispatch={charDispatch} equippedSpells={character.equippedSpells} handleEditViewChange={setView} />
      case "weapons":
        return <ComEditWeaponsList equippedWeapons={character.equippedWeapons} dispatch={charDispatch} handleEditViewChange={setView} />;
    }
  }

  // JSX
  return (
    <div className="m-4 max-w-2xl">
      {renderViews()}
    </div>
  );
}
