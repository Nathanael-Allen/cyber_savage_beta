import { TUnit } from "../types/types";


export default function checkCharacteristics(unit: TUnit): TUnit {
  const charsList = unit.equippedCharacteristics?.map((char) => char.name.toLowerCase());
  let health = 0;
  let speed = 0;


  charsList?.forEach((char) => {
    switch (char) {
      case "fast":
        speed += 3;
        break
      case "hulking body":
        health += 4;
        break
      case "mounted":
        speed += 2;
        health += 2;
        break
      case "small":
        speed += 2;
        break
      case "heavy armor":
        speed -= 1;
        break
    }
  })

  return {
    ...unit,
    bonusHealth: health,
    bonusSpeed: speed
  }
}
