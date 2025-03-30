import { TCharacteristics, TSpells, TUnit, TWeapon } from "../types/types";
import Character from "../classes/Character";

type TActionType = "removeChar" | "addChar" | "removeSpell" | "addSpell"
type TAction = { type: TActionType, characteristic?: TCharacteristics, spell?: TSpells, weapon?: TWeapon }

export default function editReducer(character: TUnit, action: TAction): TUnit {
  let updatedCharacter = { ...character };

  switch (action.type) {
    case "addChar":
      updatedCharacter.equippedCharacteristics.push(action.characteristic!);
      break;
    case "removeChar":
      updatedCharacter.equippedCharacteristics = updatedCharacter.equippedCharacteristics.filter(char => char.name !== action.characteristic!.name);
      break;
    case "addSpell":
      updatedCharacter.equippedSpells.push(action.spell!);
      break;
    case "removeSpell":
      updatedCharacter.equippedSpells = updatedCharacter.equippedSpells.filter(spell => spell.name !== action.spell!.name);
      break;
    default:
      break;
  }

  if (action.characteristic != undefined) {
    let { bonusHealth, bonusSpeed, extraSpell, extraWeapon } = Character.calcBonusStat(updatedCharacter.equippedCharacteristics);
    updatedCharacter.bonusHealth = bonusHealth;
    updatedCharacter.bonusSpeed = bonusSpeed;
    updatedCharacter.extraSpell = extraSpell;
    updatedCharacter.extraWeapon = extraWeapon;
  }

  return updatedCharacter;
}

export type { TActionType, TAction }
