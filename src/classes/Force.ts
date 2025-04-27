import { TForce, TUnit, TUnitID } from "../types/types";

export default class Force {
  static getTotalPoints(force: TForce) {
    let totalPoints = 0;
    force.characters.map((char) => (totalPoints += char.level));
    return totalPoints;
  }

  static getCharacterById(id: TUnitID, force: TForce): TUnit | null {
    let character: TUnit | null = null
    force.characters.forEach((char) => {
      if (char.id === id) {
        character = char;
      }
    });
    return character;
  }
}
