import { TWeapon } from "../types/types";

export default function getTotalWeaponDmg(weapon: TWeapon): number {
  const {damage, bonusDamage} = weapon;
  if (!damage) return 0;
  if (bonusDamage && bonusDamage > 0) return bonusDamage + damage;
  return damage;
}