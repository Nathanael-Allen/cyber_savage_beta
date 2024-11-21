import { useState } from "react";
import { TUnit } from "../types-interfaces/types";
import { SpellsList } from "../constants/SpellsList";
import ComWeapon from "./ComWeapon";
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
          <ComWeapon weapon={weapon} />
        );
      })}
    </div>
  );
}
