import IWeapon from "./IWeapon";
import { TDicesType } from "./TDiceType";

type TUnitID = string | number;

interface IUnit {
  readonly level: 1 | 2 | 3 | 4;
  readonly type: string;
  availableWeapons: IWeapon[];
  numTraits: number;
  speed?: number;
  health?: number;
  diceMelee?: TDicesType;
  diceRanged?: TDicesType;
  diceDefense?: TDicesType;
  diceWillpower?: TDicesType;
  numSpells?: number;
  equippedTraits?: string[];
  hasFlaw?: boolean;
  equippedSpells?: string[];
  id?: TUnitID;
}

export type {TUnitID, IUnit}