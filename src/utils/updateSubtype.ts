import { TWeaponSubtype } from "../types/types";

export default function updateSubtype(subtype: TWeaponSubtype) {
  let numAttacks;
  let damage;

  switch (subtype) {
    case "light":
      numAttacks = 4;
      damage = 2;
      break;
    case "medium":
      numAttacks = 3;
      damage = 3;
      break;
    case "heavy":
      numAttacks = 2;
      damage = 4;
      break;
  }

  return { numAttacks, damage };
}
