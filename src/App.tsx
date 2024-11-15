import ComAvailableUnitList from "./components/ComAvailableUnitList";
import availableUnits from "./constants/unitListConstants";
import { useState } from "react";
import { IUnit, TUnitID } from "./interfaces/IUnit";
import ComEquippedUnits from "./components/ComEquippedUnits";
import ComAlertBox from "./components/ComAlertBox";
import cloneUnit from "./utils/cloneUnit";
import { TAttributeType } from "./interfaces/TAttributeType";
import IWeapon from "./interfaces/IWeapon";

type TView = "available" | "equipped";
type TAlert = string | null;
type TEquippedUnitsProps = {
  handleAddAttribute(
    unitID: TUnitID,
    trait: string,
    type: TAttributeType
  ): void;
  handleRemoveAttribute(
    UnitID: TUnitID,
    trait: string,
    type: TAttributeType
  ): void;
  handleDeleteUnit(UnitID: TUnitID): void;
  handleAddWeaponTrait(unitID: TUnitID, trait: string, weaponIndex: number): void;
  handleRemoveWeaponTrait(unitID: TUnitID, trait: string, weaponIndex: number): void;
};

function App() {
  const [unitList, setUnitList] = useState<IUnit[]>([]);
  const [view, setView] = useState<TView>("available");
  const [alerts, setAlert] = useState<TAlert>();
  const equippedUnitProps: TEquippedUnitsProps = {
    handleAddAttribute: handleAddAttribute,
    handleRemoveAttribute: handleRemoveAttribute,
    handleDeleteUnit: handleDeleteUnit,
    handleAddWeaponTrait: handleAddWeaponTrait,
    handleRemoveWeaponTrait: handleRemoveWeaponTrait
  };


  function handleRemoveWeaponTrait(unitID: TUnitID, trait: string, weaponIndex: number) {
    setUnitList(
      unitList.map((unit) => {
        if (unit.id === unitID) {
          const updatedWeapons: IWeapon[] = unit.availableWeapons.map(
            (weapon, index) => {
              if (index === weaponIndex) {
                const newTraits = weapon.equippedTraits!.filter((equippedTrait) => {
                  return equippedTrait != trait;
                })
                return {
                  ...weapon,
                  equippedTraits: newTraits
                };
              } else {
                return {
                  ...weapon,
                };
              }
            }
          );
          return {
            ...unit,
            availableWeapons: updatedWeapons,
          };
        } else {
          return { ...unit };
        }
      })
    );
  }

  function handleAddWeaponTrait(
    unitID: TUnitID,
    trait: string,
    weaponIndex: number
  ) {
    setUnitList(
      unitList.map((unit) => {
        if (unit.id === unitID) {
          const updatedWeapons: IWeapon[] = unit.availableWeapons.map(
            (weapon, index) => {
              if (index === weaponIndex) {
                return {
                  ...weapon,
                  equippedTraits: weapon.equippedTraits
                    ? [...weapon.equippedTraits, trait]
                    : [trait],
                };
              } else {
                return {
                  ...weapon,
                };
              }
            }
          );
          return {
            ...unit,
            availableWeapons: updatedWeapons,
          };
        } else {
          return { ...unit };
        }
      })
    );
  }

  function handleAddAttribute(
    unitID: TUnitID,
    attribute: string,
    type: TAttributeType
  ) {
    setUnitList(
      unitList.map((unit) => {
        if (unit.id === unitID) {
          switch (type) {
            case "trait":
              return {
                ...unit,
                equippedTraits: unit.equippedTraits
                  ? [...unit.equippedTraits, attribute]
                  : [attribute],
              };
            case "flaw":
              return {
                ...unit,
                equippedFlaw: [attribute],
              };
            case "spell":
              return {
                ...unit,
                equippedSpells: unit.equippedSpells
                  ? [...unit.equippedSpells, attribute]
                  : [attribute],
              };
            case "weaponTrait":
              return {
                ...unit,
              };
          }
        } else {
          return { ...unit };
        }
      })
    );
  }

  function handleRemoveAttribute(
    unitID: TUnitID,
    attribute: string,
    type: TAttributeType
  ) {
    setUnitList(
      unitList.map((unit) => {
        if (unit.id === unitID) {
          switch (type) {
            case "flaw":
              return {
                ...unit,
                equippedFlaw: unit.equippedFlaw!.filter(
                  (eAttribute) => eAttribute != attribute
                ),
              };
            case "spell":
              return {
                ...unit,
                equippedSpells: unit.equippedSpells!.filter(
                  (eAttribute) => eAttribute != attribute
                ),
              };
            case "trait":
              return {
                ...unit,
                equippedTraits: unit.equippedTraits!.filter(
                  (eAttribute) => eAttribute != attribute
                ),
              };
            case "weaponTrait":
              return {
                ...unit,
              };
          }
        } else {
          return { ...unit };
        }
      })
    );
  }

  function handleAlert(message: string) {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  function handleDeleteUnit(UnitID: number | string) {
    const newList = unitList.filter((unit) => {
      return unit.id !== UnitID;
    });
    setUnitList(newList);
  }

  function handleAddUnit(unit: IUnit) {
    const newUnit = cloneUnit(unit, unitList);
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
          Equipped
        </button>
      </header>
      <div className={view === "available" ? "" : "hidden"}>
        <ComAvailableUnitList
          unitList={availableUnits}
          handleAddUnit={handleAddUnit}
        />
      </div>
      <div className={view === "equipped" ? "" : "hidden"}>
        <ComEquippedUnits unitList={unitList} unitProps={equippedUnitProps} />
      </div>
      {alerts && <ComAlertBox message={alerts} />}
    </>
  );
}

export default App;
export type { TEquippedUnitsProps };
