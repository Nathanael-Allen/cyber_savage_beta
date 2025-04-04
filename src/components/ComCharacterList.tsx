import { TForceViews, TUnit } from "../types/types";
import ComCharacterPreview from "./ComCharacterPreview";

type props = { characters: TUnit[], handleViewChange: (view: TForceViews, character?: TUnit) => void };

export default function ComCharacterList({characters, handleViewChange}: props) {
  return (
    <div>
      {characters.map((char) => {
        return <ComCharacterPreview character={char} handleViewChange={handleViewChange} />
      })}
    </div>
  )
}
