import ComAvailableUnitList from "./components/ComAvailableUnitList";
import { handleAddUnit } from "./utils/clickHandlers/clickHandlers";
import availableUnits from "./constants/AllUnitsList";
import { useState } from "react";
import { TUnit } from "./types/types";
import ComAlertBox from "./components/ComAlertBox";
import ComUnitNew from "./components/ComUnit";

type TView = "available" | "equipped";
type TAlert = string | null;

function App() {
  const [unitList, setUnitList] = useState<TUnit[]>([]);
  const [view, setView] = useState<TView>("available");
  const [alerts, setAlert] = useState<TAlert>();

  function handleUnitClick(unit: TUnit) {
    const newUnit = handleAddUnit(unit, unitList);
    setUnitList([...unitList, newUnit])
  }

  return (
    <>
      <header className="flex gap-4">
        <button
          onClick={() => {
            setView("available");
          }}
        >
          Available Units
        </button>
        <button
          onClick={() => {
            setView("equipped");
          }}
        >
          Equipped
        </button>
      </header>
      <div className={view === "available" ? "" : "hidden"}>
        <ComAvailableUnitList
          unitList={availableUnits}
          handleAddUnit={handleUnitClick}
        />
      </div>
      <div className={view === "equipped" ? "" : "hidden"}>
        {
          unitList.map((unit) => {
            return (
              <ComUnitNew unit={unit} />
            )
          })
        }
      </div>
      {alerts && <ComAlertBox message={alerts} />}
    </>
  );
}

export default App;
