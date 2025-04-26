import Character from "../classes/Character";
import { TForce, TUnit } from "../types/types";

type TForceActionType = "deleteCharacter" | "updateCharacter" | "addCharacter" | "duplicateCharacter";
type TForceAction = {type: TForceActionType, character?: TUnit}

export default function forceReducer(force: TForce, action: TForceAction): TForce {
  switch (action.type) {
    case "deleteCharacter":
      return {...force, characters: force.characters.filter((char) => char.id !== action.character!.id)}
    case "addCharacter":
      const newCharacter = Character.addCharacter(action.character!);
      return {...force, characters: [...force.characters, newCharacter]}
    case "updateCharacter":
      return {...force, characters: force.characters.map((char) => {
        if (char.id === action.character!.id) {
          return action.character!
        } else {
          return char;
        }
      })}
    default:
      return force;
  }
}

export type { TForceActionType, TForceAction }