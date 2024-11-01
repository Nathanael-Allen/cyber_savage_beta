import ComAvailableUnitList from "./components/ComAvailableUnitList";
import availableUnits from "./constants/unitListConstants";
import { useEffect, useId, useState } from "react";
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

  function deleteHandler(id: number | string) {
    const newList = unitList.filter((unit) => {
      return unit.id !== id;
    });
    setUnitList(newList);
  }

  function handleAddUnit(unit: IUnit) {
    const newUnit: IUnit = {
      type: unit.type,
      level: unit.level,
      availableWeapons: unit.availableWeapons,
      numTraits: unit.numTraits,
      id: unit.type + unitList.length,
    };
    unit.numSpells ? (newUnit.numSpells = unit.numSpells) : null;
    unit.equippedTraits ? (newUnit.equippedTraits = unit.equippedTraits) : null;
    setUnitList([...unitList, newUnit]);
    const message = `${newUnit.type} added!`;
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
        <ComEquippedUnits unitList={unitList} deleteHandler={deleteHandler} />
      </div>
      {alerts && <ComAlertBox message={alerts} />}
    </>
  );
}

export default App;
