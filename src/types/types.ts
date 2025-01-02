// Types
type TUnitID = string | number;

type TMainViews = "addUnits" | "equippedUnits" | "editUnit" | "main" | "force";

type TUnit = {
  readonly level: 1 | 2 | 3 | 4;
  readonly unitClass: string;
  equippedWeapons: TWeapon[];
  numCharacteristics: number;
  unitName?: string;
  speed?: number;
  health?: number;
  bonusHealth?: number;
  bonusSpeed?: number;
  diceMelee?: TDicesType;
  diceRanged?: TDicesType;
  diceDefense?: TDicesType;
  diceWillpower?: TDicesType;
  numSpells?: number;
  equippedCharacteristics?: TCharacteristics[];
  hasFlaw?: boolean;
  equippedSpells?: TSpells[];
  id?: TUnitID;
};

type TForce = {
  forceName: string;
  forceID: string;
  units: TUnit[];  
}

type TDicesType = "d4" | "d6" | "d8" | "d10" | "d12";

type TCharacteristics = { name: string; description: string };

type TTechLevel = "simple" | "standard" | "advanced" | "prime";

type TFlaw = { name: string; description: string };

type TSpells = {
  name: string;
  spellocity: TDicesType | "target";
  range: string;
  fizzle?: string;
  weak?: string;
  adequate?: string;
  exemplary?: string;
};

type TWeapon = {
  type: "ranged" | "melee" | "unarmed";
  techLevel: TTechLevel;
  numTraits?: number;
  subtype?: TWeaponSubtype;
  equippedTraits?: TWeaponTrait[];
  numAttack?: number;
  damage?: number;
  bonusAttacks?: number;
  bonusDamage?: number;
  id?: number;
};

type TWeaponSubtype = "light" | "medium" | "heavy";

type TWeaponTrait = {
  name: string;
  description: string;
  weaponType: "melee" | "ranged" | "both";
  weaponSubtype: "light" | "medium" | "heavy" | "all";
};

type TAttributeType = "trait" | "spell" | "weaponTrait";

export type {
  TUnit,
  TUnitID,
  TWeapon,
  TDicesType,
  TAttributeType,
  TCharacteristics,
  TSpells,
  TWeaponTrait,
  TFlaw,
  TWeaponSubtype,
  TMainViews,
  TTechLevel,
  TForce,
};

