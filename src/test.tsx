import ComUnitNew from "./components/ComUnitNew";
import { TUnit } from "./types-interfaces/TUnit";


export default function Test() { 
  const myUnit: TUnit = {
    level: 2,
    type: "Mage",
    equippedWeapons: [{ type: "melee", techLevel: "simple", subtype: "light", damage: 2, numAttack: 4, equippedTraits: ["Rending"] }],
    numTraits: 2,
    numSpells: 2,
    speed: 6,
    health: 12,
    diceMelee: "d4",
    diceRanged: "d4",
    diceDefense: "d6",
    diceWillpower: "d6",
    equippedSpells: ["Haste", "Heal"],
    equippedTraits: ["Heavy Armor", "Hulking"]
  }
  
  return (
    <ComUnitNew unit={myUnit} />
  )
}