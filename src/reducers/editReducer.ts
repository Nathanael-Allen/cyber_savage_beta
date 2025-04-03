import { TCharacteristics, TSpells, TUnit, TWeapon } from "../types/types";
import Character from "../classes/Character";

type TActionType = "removeChar" | "addChar" | "removeSpell" | "addSpell"
type TAction = { type: TActionType, characteristic?: TCharacteristics, spell?: TSpells, weapon?: TWeapon }

export default function editReducer(character: TUnit, action: TAction): TUnit {
  switch (action.type) {
    case "addChar":
      character = {...character, equippedCharacteristics: [...character.equippedCharacteristics, action.characteristic!]}
      break;
    case "removeChar":
      character = {
        ...character,
        equippedCharacteristics: character.equippedCharacteristics.filter(char => char.name !== action.characteristic!.name)
      }
      break;
    case "addSpell":
      character = {...character, equippedSpells: [...character.equippedSpells, action.spell!]}
      break;
    case "removeSpell":
      character = {...character, equippedSpells: character.equippedSpells.filter(spell => spell.name !== action.spell!.name)};
      break;
    default:
      break;
  }

  if (action.characteristic != undefined) {
    let { bonusHealth, bonusSpeed, extraSpell, extraWeapon } = Character.calcBonusStat(character.equippedCharacteristics);
    character = {
      ...character,
      bonusHealth: bonusHealth,
      bonusSpeed: bonusSpeed,
      extraSpell: extraSpell,
      extraWeapon: extraWeapon
    }
  }

  return character;
}

export type { TActionType, TAction }
