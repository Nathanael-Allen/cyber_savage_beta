import { TWeapon } from "../types/types";

export default function getTotalWeaponAtks(weapon: TWeapon) {
  const {numAttack, bonusAttacks} = weapon;

  if (!numAttack) return 0;
  if (bonusAttacks && bonusAttacks > 0) return numAttack + bonusAttacks;
  return numAttack;
}
