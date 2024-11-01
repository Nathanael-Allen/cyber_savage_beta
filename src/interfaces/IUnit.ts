import IWeapon from "./IWeapon";

export default interface IUnit {
  readonly level: 1 | 2 | 3 | 4;
  readonly type: string;
  availableWeapons: IWeapon[];
  numTraits: number;
  numSpells?: number;
  equippedTraits?: string[];
  id?: string | number
}