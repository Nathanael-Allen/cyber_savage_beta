import { TUnit } from "../types/types";
import ComCharacterPreview from "./ComCharacterPreview";

type props = { characters: TUnit[] };

export default function ComCharacterList({characters}: props) {
  return (
    <div>
      {characters.map((char) => {
        return <ComCharacterPreview character={char} />
      })}
    </div>
  )
}
