import { TCharacteristics, TUnit } from "../types/types";

type actionType = "removeChar" | "addChar"
type action = {type: actionType, characteristic?: TCharacteristics}

export default function editReducer(character: TUnit, action: action) {
  switch (action.type) {
    case "addChar":
      character.equippedCharacteristics = [...character.equippedCharacteristics!, action.characteristic!]
  }
}