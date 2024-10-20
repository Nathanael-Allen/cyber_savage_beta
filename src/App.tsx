import ComAvailableUnits from "./components/ComAvailableUnitList";
import availableUnits from "./constants/unitListConstants";
import { useId, useState } from "react";
import IUnit from "./interfaces/IUnit";
import ComUnit from "./components/ComUnit";
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

  function ComEquippedUnits() {
    return (
      <div>
        <h4 className="mt-4">Unit List</h4>
        {unitList.map((unit) => {
          return <ComUnit key={unit.type + useId()} unit={unit} />;
        })}
      </div>
    );
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
      {view === "available" && (
        <ComAvailableUnits
          unitList={availableUnits}
          handleAddUnit={handleAddUnit}
        />
      )}
      {view === "equipped" && <ComEquippedUnits />}
      {alerts && <ComAlertBox message={alerts} />}
    </>
  );
}

export default App;
