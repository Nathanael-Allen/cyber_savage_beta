import ComAvailableUnitList from "./components/ComAvailableUnitList";
import availableUnits from "./constants/unitListConstants";
import { useState } from "react";
import { IUnit, TUnitID } from "./interfaces/IUnit";
import ComEquippedUnits from "./components/ComEquippedUnits";
import ComAlertBox from "./components/ComAlertBox";
import { TAttributeType } from "./interfaces/TAttributeType";
import IWeapon from "./interfaces/IWeapon";
import { TSubtype } from "./components/ComWeapon";

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
  weaponSubtypeHandler(UnitID: TUnitID, subtype: string, weaponIndex: number): void;
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
    handleRemoveWeaponTrait: handleRemoveWeaponTrait,
    weaponSubtypeHandler: weaponSubtypeHandler
  };

  function weaponSubtypeHandler(unitID: TUnitID, subtype: TSubtype, weaponID: number) {
    setUnitList(
      unitList.map((unit) => {
        if (unit.id === unitID) {
          const updatedWeapons: IWeapon[] = unit.availableWeapons.map((weapon) => {
            if (weapon.id === weaponID) {
              return {
                ...weapon,
                subtype: subtype
              }
            } else {
              return {
                ...weapon
              }
            }
          })
          return {
            ...unit,
            availableWeapons: updatedWeapons
          }
        } else {
          return {
            ...unit
          }
        }
      })
    )
  }

  function handleRemoveWeaponTrait(unitID: TUnitID, trait: string, id: number) {
    setUnitList(
      unitList.map((unit) => {
        if (unit.id === unitID) {
          const updatedWeapons: IWeapon[] = unit.availableWeapons.map(
            (weapon) => {
              if (weapon.id === id) {
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
    id: number
  ) {
    setUnitList(
      unitList.map((unit) => {
        if (unit.id === unitID) {
          const updatedWeapons: IWeapon[] = unit.availableWeapons.map(
            (weapon) => {
              if (weapon.id === id) {
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
    const weapons = unit.availableWeapons.map((weapon, index) => {
      let numTraits;
      switch (weapon.techLevel) {
        case "simple":
          numTraits = 0;
          break;
        case "standard":
          numTraits = 1;
          break;
        case "advanced":
          numTraits = 2;
          break;
      }      return {
        ...weapon,
        equippedTraits: weapon.equippedTraits ? weapon.equippedTraits : [],
        id: index,
        numTraits: numTraits,
      }
    })
    setUnitList([...unitList, 
      {
        ...unit,
        availableWeapons: weapons,
        numTraits: unit.hasFlaw ? unit.numTraits + 1 : unit.numTraits,
        id: unit.type + (unitList.length + 1)
      }
    ]);
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
