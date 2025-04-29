import { useState } from "react";
import ComMainMenu from "./components/ComMainMenu";
import { TForce } from "./types/types";
import ComForceMain from "./components/ComForceMain";
import genUID from "./utils/genUID";

type TAppViews = "main" | "force";

export default function App() {
  const [view, setView] = useState<TAppViews>("main");
  const [forceState, setForce] = useState<TForce | null>(null);
  const APP_VERSION = 1.0;

  function handleLoadForce(force: TForce) {
    setForce(force);
    setView("force");
  }
  function handleNewForce(forceName: string) {
    setForce({
      forceID: "force-" + genUID(),
      forceName: forceName,
      characters: [],
      forceVersion: APP_VERSION,
    });
    setView("force");
  }

  function handleMainViewChange() {
    setView("main");
  }

  function renderView() {
    switch (view) {
      case "main":
        return (
          <ComMainMenu
            handleLoadForce={handleLoadForce}
            handleNewForce={handleNewForce}
          />
        );
      case "force":
        return <ComForceMain forceInit={forceState!} handleMainViewChange={handleMainViewChange}/>;
    }
  }
  return (
    <div>
      {view === "main" ? (
        <div className="min-h-12 bg-slate-900 flex justify-center items-center">
          <h1 className="text-white font-anta font-semibold">
            CYBER SAVAGE FORCE BUILDER
          </h1>
        </div>
      ) : null}
      {renderView()}
    </div>
  );
}
