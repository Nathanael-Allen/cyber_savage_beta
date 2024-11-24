// Types
type TUnitID = string | number;

type TMainViews = "addUnits" | "equippedUnits" | "editUnit"

type TUnit = {
  readonly level: 1 | 2 | 3 | 4;
  readonly unitClass: string;
  equippedWeapons: TWeapon[];
  numCharacteristics: number;
  speed?: number;
  health?: number;
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


type TDicesType = "d4" | "d6" | "d8" | "d10" | "d12";

type TCharacteristics = { name: string; description: string };

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
  techLevel: "simple" | "standard" | "advanced";
  numTraits?: number;
  subtype?: TWeaponSubtype;
  equippedTraits?: TWeaponTrait[];
  numAttack?: number;
  damage?: number;
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
};
