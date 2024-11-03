import IUnit from "../interfaces/IUnit";

function cloneUnit(unit: IUnit, unitList: IUnit[]) {
  const newUnit: IUnit = {
    type: unit.type,
    level: unit.level,
    availableWeapons: unit.availableWeapons,
    numTraits: unit.numTraits,
    id: unit.type + (unitList.length + 1),
  };
  unit.numSpells ? (newUnit.numSpells = unit.numSpells) : null;
  unit.equippedTraits ? (newUnit.equippedTraits = unit.equippedTraits) : null;
  return newUnit;
}

export default cloneUnit;
