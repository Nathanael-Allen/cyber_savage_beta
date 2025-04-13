import { WeaponTraitsList } from "../constants/WeaponTraitsList";
import { TWeapon } from "../types/types";


export default class Weapon {
  
  static getTotalDmg(weapon: TWeapon) {
    return weapon.bonusDamage + weapon.damage;
  }

  static getTotalAtks(weapon: TWeapon) {
    return weapon.bonusAttacks + weapon.numAttacks;
  }

  static getAvailableTraits(weapon: TWeapon) {
    const equippedTraits = weapon.equippedTraits.map((trait) => trait.name);
    return WeaponTraitsList.filter((trait) => {
      if (equippedTraits.indexOf(trait.name) !== -1) {
        return false;
      }
      if (trait.weaponSubtype !== "all" && trait.weaponSubtype !== weapon.subtype) {
        return false;
      }
      if (trait.weaponType !== "both" && trait.weaponType !== weapon.type) {
        return false;
      }
      return trait;
    })
  }

  static getBaseDmg(weapon: TWeapon) {
    let dmg = 0;
    switch (weapon.subtype) {
      case "light":
        dmg = 2
        break;
      case "medium":
        dmg = 3;
        break;
      case "heavy":
        dmg = 4;
        break;
    }
    if (weapon.techLevel === "prime") {
      dmg += 1;
    }
    return dmg;
  }

  static getBaseAtks(weapon: TWeapon) {
    let atks = 0;
    switch (weapon.subtype) {
      case "light":
        atks = 4;
        break;
      case "medium":
        atks = 3;
        break;
      case "heavy":
        atks = 2;
        break;
    }
    return atks;
  }

  static getNumTraits(weapon: TWeapon) {
    switch (weapon.techLevel) {
      case "simple":
        return 0;
      case "standard":
        return 1;
      case "advanced":
        return 2;
      case "prime":
        return 2;
    }
  }

  static calcWeaponStats(weapon: TWeapon): TWeapon {
    return {
      ...weapon,
      numAttacks: Weapon.getBaseAtks(weapon),
      damage: Weapon.getBaseDmg(weapon),
    }
  }
  
}