import { TUnit, TEditViews } from "../../types/types";
import { useState } from "react";
import ComEditMain from "./ComEditMain";

type props = { characterToEdit: TUnit };

export default function ComEdit({ characterToEdit }: props) {
  // CONSTANTS
  const character: TUnit = { ...characterToEdit };

  // STATE
  const [view, setView] = useState<TEditViews>("main");
  
  // FUNCTIONS
  function renderSwitch() {
    switch (view) {
      case "main":
        return (<ComEditMain character={character} handleViewChange={setView} />);
      case "characteristics":
        return (<h1 onClick={() => setView("main")}>CHARACTERISTICS</h1>);
      case "spells":
        return (<h1 onClick={() => setView("main")}>SPELLS</h1>);
      case "weapons":
        return (<h1 onClick={() => setView("main")}>WEAPONS</h1>);
    }
  }

  // JSX
  return (
    <div className="min-h-dvh m-4 bg-slate-200 border border-black rounded-md max-w-2xl">
      {renderSwitch()}
    </div>
  );
}
