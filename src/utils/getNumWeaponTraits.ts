import { TTechLevel } from "../types/types";

export default function getNumWeaponTraits(techLevel: TTechLevel) {
  let numTraits;

  switch (techLevel) {
    case "simple":
      numTraits = 0;
      break;
    case "standard":
      numTraits = 1;
      break;
    case "advanced":
      numTraits = 2;
      break;
    case "prime":
      numTraits = 2;
      break;
  }

  return numTraits;
}
