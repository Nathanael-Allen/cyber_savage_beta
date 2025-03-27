import { TUnit } from "../types/types"
import ComEqCharacteristics from "./ComEqCharacteristics";
import ComEqSpells from "./ComEqSpells";
import ComStatBubble from "./ComStatBubble";

type props = {unit: TUnit};

export default function ComFullCharacter({unit}: props) {
  return (
    <div className="min-h-dvh m-4 p-2 bg-slate-200 border border-black rounded-md">
      <div className="flex flex-col justify-center items-center">
         <h2 className="text-2xl font-bold">{unit.unitName}</h2>
         <div className="flex gap-6">
          <p className="text-xl font-semibold">{unit.unitClass}</p>
          <p className="text-xl">level: {unit.level}</p>
         </div>
      </div>
      <div className="flex flex-col gap-3 mt-8 mb-4">
        <div className="flex gap-6 justify-around">
          <ComStatBubble stat={unit.speed!} statTag="spd" />
          <ComStatBubble stat={unit.diceMelee!} statTag="mel" />
          <ComStatBubble stat={unit.diceDefense!} statTag="def" />
        </div>
        <div className="flex gap-6 justify-around">
          <ComStatBubble stat={unit.health!} statTag="hp" />
          <ComStatBubble stat={unit.diceRanged!} statTag="rng" />
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
    </div>
  )
}