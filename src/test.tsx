import ComEditWindow from "./components/ComEditWindow";
import ComUnitNew from "./components/ComUnitNew";
import { TUnit } from "./types-interfaces/types";

export default function Test() { 
  const myUnit: TUnit = {
    level: 2,
    type: "Mage",
    equippedWeapons: [{ type: "melee", techLevel: "standard", subtype: "light", damage: 2, numAttack: 4, numTraits: 1, equippedTraits: ["Rending"] }],
    numCharacteristics: 2,
    numSpells: 2,
    speed: 6,
    health: 12,
    diceMelee: "d4",
    diceRanged: "d4",
    diceDefense: "d6",
    diceWillpower: "d6",
    equippedSpells: ["Haste", "Heal"],
    equippedCharacteristics: ["Heavy Armor", "Hulking"]
  }
  
  return (
    <ComEditWindow unit={myUnit} />
  )
}