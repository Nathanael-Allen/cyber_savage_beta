import ComAvailableUnitList from "./components/ComAvailableUnitList";
import availableUnits from "./constants/unitListConstants";
import { useState } from "react";
import IUnit from "./interfaces/IUnit";
import ComEquippedUnits from "./components/ComEquippedUnits";
import ComAlertBox from "./components/ComAlertBox";

type TView = "available" | "equipped";
type TAlert = string | null;

function App() {
  const [unitList, setUnitList] = useState<IUnit[]>([]);
  const [view, setView] = useState<TView>("available");
  const [alerts, setAlert] = useState<TAlert>();

  function handleAlert(message: string) {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  function handleAddUnit(unit: IUnit) {
    setUnitList([...unitList, unit]);
    const message = `${unit.type} added!`;
    handleAlert(message);
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
          Equipped Units
        </button>
      </header>
      <div className={view === "available" ? "" : "hidden"}>
        <ComAvailableUnitList
          unitList={availableUnits}
          handleAddUnit={handleAddUnit}
        />
      </div>
      <div className={view === "equipped" ? "" : "hidden"}>
        <ComEquippedUnits unitList={unitList} />
      </div>
      {alerts && <ComAlertBox message={alerts} />}
    </>
  );
}

export default App;
