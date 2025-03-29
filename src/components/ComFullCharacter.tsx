import { TUnit } from "../types/types"
import ComCharacterStatHeader from "./ComCharacterStatHeader";
import ComEqCharacteristics from "./ComEqCharacteristics";
import ComEqSpells from "./ComEqSpells";
import ComWeapon from "./ComWeapon";

type props = {character: TUnit};

export default function ComFullCharacter({character}: props) {
  return (
    <div className="min-h-dvh m-4 bg-slate-200 border border-black rounded-md max-w-2xl">
      <button className="w-full text-sky-700 px-3 pt-1 text-lg font-bold text-center hover:text-sky-600">EDIT LOADOUT</button>
      <ComCharacterStatHeader character={character} />
      <div className="grid grid-cols-2 gap-4 m-1">
        <div>
          {character.equippedCharacteristics && <ComEqCharacteristics charList={character.equippedCharacteristics} />}
        </div>
        <div>
          {character.equippedSpells && <ComEqSpells spellList={character.equippedSpells} />}
        </div>
      </div>
      <div className="m-1">
        {character.equippedWeapons.map((weapon) => {
          return (
            <div className="my-4">
              <ComWeapon weapon={weapon} />
            </div>
          )
        })}
      </div>

    </div>
  )
}