import { TForceViews, TUnit, TUnitID } from "../types/types";
import ComCharacterPreview from "./ComCharacterPreview";

type props = { characters: TUnit[], handleViewChange: (view: TForceViews, characterId?: TUnitID) => void };

export default function ComCharacterList({characters, handleViewChange}: props) {
  return (
    <div>
      {characters.map((char, index) => {
        return <ComCharacterPreview key={index} character={char} handleViewChange={handleViewChange} />
      })}
    </div>
  )
}
