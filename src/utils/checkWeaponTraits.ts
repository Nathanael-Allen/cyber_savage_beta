import { TWeapon } from "../types/types";

export default function checkWeaponTraits(weapon: TWeapon) {
  const traitList = weapon.equippedTraits?.map((trait) =>
    trait.name.toLowerCase()
  );
  let bonusAttacks = 0;
  let bonusDamage = 0;

  traitList?.forEach((trait) => {
    switch (trait) {
      case "rapid fire":
        bonusAttacks += 1;
        break;
      case "short range":
        bonusDamage += 1;
        break;
      case "unwieldy":
        bonusAttacks += 1;
        break;
    }
  })
  return {
    bonusAttacks: bonusAttacks,
    bonusDamage: bonusDamage,
  };
  ;
}
