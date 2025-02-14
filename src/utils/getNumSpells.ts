import { TUnit } from "../types/types";

export default function getNumSpells(unit: TUnit) {
  let numSpells = unit.numSpells ? unit.numSpells : 0;
  
  if (unit.extraSpell !== undefined && unit.extraSpell === true) {
    return numSpells + 1;
  } else if (numSpells === undefined) {
    return 0;    
  } else {
    return numSpells;
  }
}