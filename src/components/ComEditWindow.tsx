import { useEffect, useState } from "react";
import { TSpells, TUnit, TWeapon } from "../types-interfaces/types";
import { SpellsList } from "../constants/SpellsList";
import ComWeapon from "./ComWeapon";
import { CharacteristicsList } from "../constants/CharacteristicsList";
type props = { unit: TUnit, mainHandler(unit: TUnit): void };

export default function ComEditWindow ({ unit, mainHandler }: props) {
  const {
    type,
    level,
    diceDefense,
    diceMelee,
    diceRanged,
    diceWillpower,
    health,
    speed,
    equippedSpells,
    equippedCharacteristics,
    equippedWeapons,
    id,
  } = unit;
  const [stateCharacteristics, setStateCharacteristics] = useState(
    equippedCharacteristics
  );
  const [stateHealth, setStateHealth] = useState(health);
  const [stateSpeed, setStateSpeed] = useState(speed);
  const [stateSpells, setStateSpells] = useState(equippedSpells);
  const [stateWeapons, setStateWeapons] = useState(equippedWeapons);

  useEffect(() => mainHandler(getUnit()), [stateCharacteristics, stateWeapons, stateSpells])

  function getUnit() {
    return {
      ...unit,
      equippedCharacteristics: stateCharacteristics,
      health: stateHealth,
      speed: stateSpeed,
      equippedSpells: stateSpells,
      equippedWeapons: stateWeapons
    }
  }

  function weaponClickHandler(weapon: TWeapon) { 
    setStateWeapons([weapon])
  }

  return (
    <div>
      <h2 className="font-bold text-2xl text-center">{unit.type}</h2>
      <div className="relative max-h-80 overflow-scroll rounded-md border-2 border-black m-2 bg-gray-300">
        <h4 className="bg-gray-700 text-white text-center p-1 rounded-t-md sticky top-0 font-semibold text-lg">Characteristics</h4>
        {CharacteristicsList.map((char, index) => {
          return (
            <p 
            key={index}
            className="text-sm p-3 border border-black cursor-pointer hover:bg-blue-100"
          >
            <button className="text-left">
              <b>{char.name}: </b> {char.description}
            </button>
          </p>
          )
        })}
      </div>
      <div className="relative max-h-80 overflow-scroll rounded-md border-2 border-black m-2 bg-gray-300">
        <h4 className="bg-gray-700 text-white text-center p-1 rounded-t-md sticky top-0 font-semibold text-lg">Spells</h4>
        {SpellsList.map((spell, index) => {
          return (
            <p 
            key={index}
            className="text-sm p-3 border border-black cursor-pointer hover:bg-blue-100"
          >
            <button className="text-left">
              <b>{spell.name}: </b> Range {spell.range} | Spellocity {spell.spellocity}
            </button>
          </p>
          )
        })}
      </div>

      {stateWeapons.map((weapon, index) => {
        return (
          <div>
            <ComWeapon key={index} weapon={weapon} clickHandler={weaponClickHandler} />
          </div>
        );
      })}
    </div>
  );
}
