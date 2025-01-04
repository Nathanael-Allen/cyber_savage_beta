import { useEffect, useRef, useState } from "react";
import { TForce, TMainViews, TUnit, TWeapon } from "./types/types";
import ComAvailableUnitList from "./components/ComAvailableUnitList";
import ComUnit from "./components/ComUnit";
import getTotalPoints from "./utils/getTotalPoints";
import ComEditWindow from "./components/ComEditWindow";
import getNumWeaponTraits from "./utils/getNumWeaponTraits";
import ComAlert from "./components/ComAlert";
import ComMainMenu from "./components/ComMainMenu";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ComPDF from "./components/ComPDF";
import { Disciplines } from "./constants/Disciplines";

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
    unit.equippedWeapons.forEach((weapon) => console.log('num traits' + weapon.numTraits))
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
    if (forceState) {
      const allForcesJson = localStorage.getItem("forces");
      const allForces: TForce[]  = allForcesJson ? JSON.parse(allForcesJson) : [];
      const updatedForces: TForce[] = allForces.filter((force) => force.forceID !== forceState.forceID); 
      
      const force:TForce = {...forceState, units: equippedUnits};
      const newForces = [...updatedForces, force]
      localStorage.setItem("forces", JSON.stringify(newForces));
      setAlert("Force Saved!");
    }
  }

  function deleteHandler(id: number | string) {
    const updatedUnits = equippedUnits.filter((unit) => {
      return unit.id !== id;
    });

    setEquippedUnits(updatedUnits);
  }

  function handleNewArmy(forceName: string) {
    setForceState({forceID: forceName, forceName: forceName, units: []})
    setEquippedUnits([]);
    setView("force");
  }

  function handleLoadArmy(force: TForce) {
    setView('force')
    setForceState(force);
    setEquippedUnits(force.units);
  }

  // State variables
  const [view, setView] = useState<TMainViews>("main");
  const [forceState, setForceState] = useState<TForce>()
  const [equippedUnits, setEquippedUnits] = useState<TUnit[]>([]);
  const [unitToEdit, setUnitToEdit] = useState<TUnit>();
  const [alert, setAlert] = useState<string>();
  const [disciplineState, setDiscipline] = useState<string>();
  const alertTimer = useRef<number>();
  const totalPoints = equippedUnits ? getTotalPoints(equippedUnits) : 0;

  const selectedDisciplineCss = "relative text-center border border-sky-800 w-2/3 m-auto rounded-md my-5 py-2 text-2xl bg-sky-100 text-black hover:shadow-custom cursor-pointer";
  const unselectedDisciplineCss = "relative text-center border border-black w-2/3 m-auto rounded-md my-5 py-2 text-2xl bg-gray-700 text-white hover:shadow-custom cursor-pointer";

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

      {view === "main" && <header className="w-full flex text-3xl text-center bg-gray-800 text-white">
      <p className="py-2 m-auto font-anta">CYBER SAVAGE LIST BUILDER</p>
      </header>}
      {view === "main" && (
        <ComMainMenu
        handleNewArmy={handleNewArmy}
        handleLoadArmy={handleLoadArmy}
        />
      )}
      {view === "force" && (
        <div>
          <PDFViewer width={800} height={500} children={<ComPDF unitList={equippedUnits} forceName={forceState!.forceName} discipline={disciplineState ? disciplineState : ''}/>} />
          <button onClick={() => setView('main')}
           className="absolute top-2 left-2 text-xl underline font-semibold hover:text-gray-800">Main Menu</button>
          <h1 className="text-center font-anta text-4xl underline mt-4">
            {forceState?.forceName}
          </h1>
          <h1 className="text-center font-anta text-xl underline mt-2">
            Combat Discipline: {disciplineState}
          </h1>
          <div className="flex flex-col gap-6 justify-center items-center my-4">
            <b className="text-lg font-normal">Points: {totalPoints}</b>
            <button
              onClick={() => setView("disciplines")}
              className="w-3/4 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"
            >
              Combat Discipline
            </button>
            <button
              onClick={() => setView("equippedUnits")}
              className="w-3/4 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"
            >
              UNITS
            </button>
            <button
              onClick={saveArmy}
              className="w-3/4 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"
            >
              SAVE FORCE
            </button>
            <button
              className="w-3/4 bg-gray-800 font-semibold text-lg text-white p-2 mx-auto text-center rounded-md hover:shadow-custom"
            >
              <PDFDownloadLink document={<ComPDF unitList={equippedUnits} forceName={forceState!.forceName} discipline={disciplineState ? disciplineState : ''} />} fileName={'cyber-savage-' + forceState?.forceName}>PRINT FORCE</PDFDownloadLink>
            </button>
          </div>
        </div>
      )}
      {view === "disciplines" && (
        <div>
          <button
            onClick={() => setView("force")}
            className="absolute -top-1 right-2"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="h-11 fill-red-800 hover:fill-red-600"
            >
              <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
            </svg>
          </button>
          <h1 className="font-anta font-semibold text-3xl text-center mb-4">
            Disciplines
          </h1>
          <div>
            {Disciplines.map((discipline) => {
              return (
              <div onClick={() => setDiscipline(discipline)} 
              className={disciplineState === discipline ? selectedDisciplineCss : unselectedDisciplineCss}>
                <button>{discipline}</button>
              </div>)
            })}
          </div>
        </div>
      )}
      {view === "addUnits" && (
        <div className="relative">
          <button
            onClick={() => setView("force")}
            className="absolute -top-1 right-2"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="h-11 fill-red-800 hover:fill-red-600"
            >
              <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
            </svg>
          </button>
          <h1 className="font-anta font-semibold text-3xl text-center mb-4">
            ADD
          </h1>
          <button
            onClick={() => {
              setView("equippedUnits");
            }}
            className="fixed bottom-12 z-10 right-2 bg-gray-800 font-semibold text-lg text-white p-3 mx-auto text-center rounded-full hover:shadow-custom"
          >
            EQUIPPED UNITS
          </button>
          <ComAvailableUnitList addUnitCallback={handleAddUnit} />
        </div>
      )}
      {view === "equippedUnits" && (
        <div className="relative">
          <button
            onClick={() => setView("force")}
            className="absolute -top-1 right-2"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="h-11 fill-red-800 hover:fill-red-600"
            >
              <path d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
            </svg>
          </button>
          <h1 className="font-anta font-semibold text-3xl text-center">
            UNITS
          </h1>
          {equippedUnits.length <= 0 && <p className="text-center">empty...</p>}
          <button
            onClick={() => {
              setView("addUnits");
            }}
            className="fixed bottom-12 z-10 right-2 bg-gray-800 font-semibold text-lg text-white p-3 mx-auto text-center rounded-full hover:shadow-custom"
          >
            ADD UNITS
          </button>
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
        <div className="fixed bottom-4 left-4">
          <div className="border border-black rounded-md text-lg font-semibold bg-gray-200 p-4 ">
            <ComAlert message={alert!} />
          </div>
        </div>
      )}
    </div>
  );
}
