import { TUnit } from "../types/types"
import ComEqCharacteristics from "./ComEqCharacteristics";
import ComEqSpells from "./ComEqSpells";
import ComStatBubble from "./ComStatBubble";
import ComWeapon from "./ComWeapon";

type props = {unit: TUnit};

export default function ComFullCharacter({unit}: props) {
  return (
    <div className="min-h-dvh m-4 p-2 bg-slate-200 border border-black rounded-md max-w-2xl">
      <div className="flex flex-col justify-center items-center">
         <h2 className="text-2xl font-bold">{unit.unitName}</h2>
         <div className="flex gap-6">
          <p className="text-xl font-semibold">{unit.unitClass}</p>
          <p className="text-xl">level: {unit.level}</p>
         </div>
      </div>
      <div className="flex gap-8 mt-4 mb-4 justify-center">
        <div className="flex flex-col gap-1 p-2 border border-black rounded-md">
          <ComStatBubble stat={unit.health!} statTag="hp" />
          <ComStatBubble stat={unit.speed!} statTag="spd" />
        </div>
        <div className="flex flex-col gap-1 p-2 border border-black rounded-md">
          <ComStatBubble stat={unit.diceMelee!} statTag="mel" />
          <ComStatBubble stat={unit.diceRanged!} statTag="rng" />
        </div>
        <div className="flex flex-col gap-1 p-2 border border-black rounded-md">
          <ComStatBubble stat={unit.diceDefense!} statTag="def" />
          <ComStatBubble stat={unit.diceWillpower!} statTag="wp" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {unit.equippedCharacteristics && <ComEqCharacteristics charList={unit.equippedCharacteristics} />}
        </div>
        <div>
          {unit.equippedSpells && <ComEqSpells spellList={unit.equippedSpells} />}
        </div>
      </div>
      <div className="">
        {unit.equippedWeapons.map((weapon) => {
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