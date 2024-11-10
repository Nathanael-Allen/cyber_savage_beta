import IWeapon from "./IWeapon";

type TUnitID = string | number;

interface IUnit {
  readonly level: 1 | 2 | 3 | 4;
  readonly type: string;
  availableWeapons: IWeapon[];
  numTraits: number;
  numSpells?: number;
  equippedTraits?: string[];
  equippedFlaw?: string[];
  equippedSpells?: string[];
  id?: TUnitID;
}

export type {TUnitID, IUnit}