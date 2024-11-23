import { useEffect, useState } from "react";
import ComEditWindow from "./components/ComEditWindow";
import ComUnitNew from "./components/ComUnit";
import { TUnit, TWeapon } from "./types/types";

export default function Test() {
  const myUnit: TUnit = {
    level: 2,
    type: "Mage",
    equippedWeapons: [
      {
        type: "melee",
        techLevel: "standard",
        numTraits: 1,
        id: 1,
        equippedTraits: [
        ],
      },
      {
        type: "ranged",
        techLevel: "standard",
        numTraits: 1,
        id: 2,
        equippedTraits: [
        ],
      }
    ],
    numCharacteristics: 2,
    numSpells: 2,
    speed: 6,
    health: 12,
    diceMelee: "d4",
    diceRanged: "d4",
    diceDefense: "d6",
    diceWillpower: "d6",
    equippedSpells: [],
    equippedCharacteristics: [],
  };
  const [unit, setUnit] = useState(myUnit);

  function mainHandler(unit: TUnit) {
    setUnit(unit)
  }

  return <ComEditWindow unit={unit} mainHandler={mainHandler} />;
}
