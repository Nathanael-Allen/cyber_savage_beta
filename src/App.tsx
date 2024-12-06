import { useEffect, useId, useRef, useState } from "react";
import { TMainViews, TUnit, TWeapon } from "./types/types";
import ComAvailableUnitList from "./components/ComAvailableUnitList";
import ComUnit from "./components/ComUnit";
import getTotalPoints from "./utils/getTotalPoints";
import ComEditWindow from "./components/ComEditWindow";
import getNumWeaponTraits from "./utils/getNumWeaponTraits";
import { getStorage, setStorage } from "./utils/storage";
import ComAlert from "./components/ComAlert";

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
      setAlert(unitClass);
    }

    const updatedUnit: TUnit = {
      ...unit,
      id: equippedUnits.length,
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

  function deleteHandler(id: number | string) {
    const updatedUnits = equippedUnits.filter((unit) => {
      return unit.id !== id;
    });

    setEquippedUnits(updatedUnits);
  }

  // State variables
  const [view, setView] = useState<TMainViews>("addUnits");
  const [equippedUnits, setEquippedUnits] = useState<TUnit[]>(getStorage());
  const [unitToEdit, setUnitToEdit] = useState<TUnit>();
  const [alert, setAlert] = useState<string>();
  const alertTimer = useRef<number>();
  const totalPoints = getTotalPoints(equippedUnits);

  useEffect(() => {
    setStorage(equippedUnits);
  }, [equippedUnits]);

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
        <button
          onClick={() => {
            setView("addUnits");
          }}
          className="border-r border-white py-2 px-4 hover:shadow-custom"
        >
          Add Units
        </button>
        <button
          onClick={() => {
            setView("equippedUnits");
          }}
          className="py-2 px-4 border-r border-white hover:shadow-custom"
        >
          Equipped Units
        </button>
      </header>

      {view === "addUnits" && (
        <ComAvailableUnitList addUnitCallback={handleAddUnit} />
      )}
      {view === "equippedUnits" && (
        <div>
          <h1 className="font-semibold text-3xl text-center py-2">
            Equipped Units {totalPoints}/10
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
            <ComAlert unitClass={alert!} />
          </div>
        </div>
      )}
    </div>
  );
}
