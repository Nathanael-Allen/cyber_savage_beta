import { TUnit } from "../types/types";
import ComStatBubble from "./ComStatBubble";

type props = { character: TUnit };

export default function ComCharacterStatHeader({ character }: props) {
  return (
    <>
      <div className="flex gap-8 m-4 justify-center">
        <div className="flex flex-col gap-1 p-2 border bg-white border-black rounded-md">
          <ComStatBubble stat={character.health!} statTag="hp" />
          <ComStatBubble stat={character.speed!} statTag="spd" />
        </div>
        <div className="flex flex-col gap-1 p-2 border bg-white border-black rounded-md">
          <ComStatBubble stat={character.diceMelee!} statTag="mel" />
          <ComStatBubble stat={character.diceRanged!} statTag="rng" />
        </div>
        <div className="flex flex-col gap-1 p-2 border bg-white border-black rounded-md">
          <ComStatBubble stat={character.diceDefense!} statTag="def" />
          <ComStatBubble stat={character.diceWillpower!} statTag="wp" />
        </div>
      </div>
    </>
  );
}
