import { useState } from "react";
import { TUnit } from "../types-interfaces/types";
import { SpellsList } from "../constants/SpellsList";
type props = { unit: TUnit };

export default function ComEditWindow ({ unit }: props) {
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

  return (
    <div>
      {stateWeapons.map((weapon) => {
        return (
          <div className="grid grid-cols-6 items-center bg-gray-200 rounded-md border-2 border-black min-h-24 m-1">
            <h4 className="font-semibold text-lg text-center max-md:col-span-6">
              {weapon.techLevel.toUpperCase()} {weapon.type.toUpperCase()} (
              {weapon.subtype?.toUpperCase()})
            </h4>
            <div>
              <div className="flex justify-center items-center rounded-full w-12 h-12 m-auto bg-white border-2 border-black text-lg font-semibold">
                {weapon.numAttack}
              </div>
              <p className="font-semibold text-center">Attacks</p>
            </div>
            <div>
              <div className="flex justify-center items-center rounded-full w-12 h-12 m-auto bg-white border-2 border-black text-lg font-semibold">
                {weapon.damage}
              </div>
              <p className="font-semibold text-center">Damage</p>
            </div>
            <div className="min-h-24 col-span-3">
              {weapon.equippedTraits?.map((trait) => {
                return (
                  <p className="text-sm m-2">
                    <b>{trait}: </b>This is a weapon trait description
                    placeholder...
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
