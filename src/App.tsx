import { useEffect, useRef, useState } from "react";
import { TMainViews, TUnit, TWeapon } from "./types/types";
import ComAvailableUnitList from "./components/ComAvailableUnitList";
import ComUnit from "./components/ComUnit";
import getTotalPoints from "./utils/getTotalPoints";
import ComEditWindow from "./components/ComEditWindow";
import getNumWeaponTraits from "./utils/getNumWeaponTraits";
import { getStorage } from "./utils/storage";
import ComAlert from "./components/ComAlert";
import ComMainMenu from "./components/ComMainMenu";

export default function App() {
  // Click Handlers
  function handleAddUnit(unit: TUnit) {
    handleAddAlert(unit.unitClass);
    const weapons: TWeapon[] = unit.equippedWeapons.map((weapon, index) => {
      return {
        ...weapon,
        id: index,
        numTraits: getNumWeaponTraits(weapon.techLevel),
      };
    });

    function handleAddAlert(unitClass: string) {
      setAlert(`${unitClass} added!`);
    }

    let bonusHealth = unit.bonusHealth ? unit.bonusHealth : 0; 
    let bonusSpeed = unit.bonusSpeed ? unit.bonusSpeed : 0; 
    
    const updatedUnit: TUnit = {
      ...unit,
      id: equippedUnits.length,
      bonusHealth: bonusHealth,
      bonusSpeed: bonusSpeed,
      equippedWeapons: weapons,
    };
    setEquippedUnits([...equippedUnits, updatedUnit]);
  }

  function cancelHandler() {
    setUnitToEdit(undefined);
    setView("equippedUnits");
  }

  function editUnit(unit: TUnit) {
    setUnitToEdit(unit);
    setView("editUnit");
  }

  function saveUnit(unit: TUnit) {
    setEquippedUnits(
      equippedUnits.map((equippedUnit) => {
        if (equippedUnit.id === unit.id) {
          return {
            ...unit,
          };
        } else {
          return {
            ...equippedUnit,
          };
        }
      })
    );
    setView("equippedUnits");
  }

  function saveArmy() {
    if (equippedUnits) {
      localStorage.setItem("myArmy", JSON.stringify(equippedUnits));
      setAlert("Army Saved!");
    }
  }

  function deleteHandler(id: number | string) {
    const updatedUnits = equippedUnits.filter((unit) => {
      return unit.id !== id;
    });

    setEquippedUnits(updatedUnits);
  }

  function handleNewArmy() {
    setView("addUnits");
  }

  function handleLoadArmy() {
    const army = localStorage.getItem("myArmy");
    if (army) {
      const parsedArmy = JSON.parse(army);
      setEquippedUnits(parsedArmy);
      setView("equippedUnits");
    }
  }

  // State variables
  const [view, setView] = useState<TMainViews>("main");
  const [equippedUnits, setEquippedUnits] = useState<TUnit[]>(getStorage());
  const [unitToEdit, setUnitToEdit] = useState<TUnit>();
  const [alert, setAlert] = useState<string>();
  const alertTimer = useRef<number>();
  const totalPoints = getTotalPoints(equippedUnits);

  useEffect(() => {
    if (alert) {
      alertTimer.current = setTimeout(() => {
        setAlert(undefined);
      }, 3000);
      return () => clearTimeout(alertTimer.current);
    }
  }, [alert]);

  return (
    <div>
      <header className="w-full flex text-xl bg-gray-800 text-white">
        {view === "main" && (
          <p className="py-2 m-auto">CYBER SAVAGE LIST BUILDER</p>
        )}
        {view !== "main" && (
          <button
            onClick={() => {
              setView("addUnits");
            }}
            className="border-r border-white py-2 px-4 hover:shadow-custom"
          >
            Add Units
          </button>
        )}
        {view !== "main" && (
          <button
            onClick={() => {
              setView("equippedUnits");
            }}
            className="py-2 px-4 border-r border-white hover:shadow-custom"
          >
            Equipped Units
          </button>
        )}
      </header>
      {view === "main" && (
        <ComMainMenu
          handleNewArmy={handleNewArmy}
          handleLoadArmy={handleLoadArmy}
        />
      )}
      {view === "addUnits" && (
        <ComAvailableUnitList addUnitCallback={handleAddUnit} />
      )}
      {view === "equippedUnits" && (
        <div>
          <div className="w-full text-right">
            <button
              onClick={saveArmy}
              className="text-lg bg-gray-800 text-white p-2 m-2 font-semibold rounded-md hover:shadow-custom"
            >
              Save Force
            </button>
          </div>
          <h1 className="font-semibold text-3xl text-center py-2">
            Equipped Units
            <br />
            <b className="text-lg font-normal">Points: {totalPoints}</b>
          </h1>
          {equippedUnits.map((unit, index) => {
            return (
              <ComUnit
                key={index}
                unit={unit}
                editCallback={editUnit}
                deleteHandler={deleteHandler}
              />
            );
          })}
        </div>
      )}
      {view === "editUnit" && (
        <ComEditWindow
          unit={unitToEdit!}
          saveHandler={saveUnit}
          cancelHandler={cancelHandler}
        />
      )}
      {alert && (
        <div className="fixed bottom-4 right-4">
          <div className="border border-black rounded-md text-lg font-semibold bg-gray-200 p-4 ">
            <ComAlert message={alert!} />
          </div>
        </div>
      )}
    </div>
  );
}
