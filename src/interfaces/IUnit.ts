import IWeapon from "./IWeapon";

export default interface IUnit {
  level: 1 | 2 | 3 | 4;
  type: string;
  availableWeapons: IWeapon[];
  numTraits: number;
  numSpells?: number;
  equippedTraits?: string[];
  id?: string | number
}