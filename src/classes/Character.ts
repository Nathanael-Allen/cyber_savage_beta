import { TCharacteristics } from "../types/types";


export default class Character {

  static calcBonusStat(chars: TCharacteristics[]): { bonusHealth: number, bonusSpeed: number, extraSpell: boolean, extraWeapon: boolean } {
    let bonusHealth = 0;
    let bonusSpeed = 0;
    let extraSpell = false;
    let extraWeapon = false;

    chars.forEach((char) => {
      switch (char.name.toLowerCase()) {
        case "fast":
          bonusSpeed += 3;
          break;
        case "heavy armor":
          bonusSpeed -= 1;
          break;
        case "hulking body":
          bonusHealth += 4;
          bonusSpeed -= 1;
          break;
        case "mounted":
          bonusHealth += 2;
          bonusSpeed += 2;
          break;
        case "mystical":
          extraSpell = true;
          break;
        case "extra weapon":
          extraWeapon = true;
          break;
      }
    })

    return { bonusHealth, bonusSpeed, extraSpell, extraWeapon }
  }
}
