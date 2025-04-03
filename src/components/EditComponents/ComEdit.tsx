import { TUnit, TEditViews } from "../../types/types";
import ComEditChars from "./ComEditChars";
import { useReducer, useState } from "react";
import ComEditMain from "./ComEditMain";
import editReducer from "../../reducers/editReducer";

type props = { characterToEdit: TUnit };

export default function ComEdit({ characterToEdit }: props) {
  // CONSTANTS

  // STATE
  const [view, setView] = useState<TEditViews>("main");
  const [character, charDispatch] = useReducer(editReducer, characterToEdit);

  // FUNCTIONS
  function renderViews() {
    switch (view) {
      case "main":
        return (<ComEditMain character={character} handleViewChange={setView} />);
      case "characteristics":
        return (<ComEditChars dispatch={charDispatch} equippedChars={character.equippedCharacteristics} />);
      case "spells":
        return (<h1 onClick={() => setView("main")}>SPELLS</h1>);
      case "weapons":
        return (<h1 onClick={() => setView("main")}>WEAPONS</h1>);
    }
  }

  // JSX
  return (
    <div className="min-h-dvh m-4 max-w-2xl">
      {renderViews()}
    </div>
  );
}
