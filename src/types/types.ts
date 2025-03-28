// Types
type TUnitID = string | number;

type TMainViews = "addUnits" | "equippedUnits" | "editUnit" | "main" | "force" | "disciplines";

type TDiscipline = {
  title: string,
  description: string,
  lines: string[]
}

type TUnit = {
  readonly level: 1 | 2 | 3 | 4 | 5;
  readonly unitClass: string;
  equippedWeapons: TWeapon[];
  numCharacteristics: number;
  numSpells: number;
  imagePath?: string;
  unitName?: string;
  speed?: number;
  health?: number;
  bonusHealth?: number;
  bonusSpeed?: number;
  diceMelee?: TDicesType;
  diceRanged?: TDicesType;
  diceDefense?: TDicesType;
  diceWillpower?: TDicesType;
  equippedCharacteristics?: TCharacteristics[];
  hasFlaw?: boolean;
  equippedSpells?: TSpells[];
  extraSpell?: boolean;
  id?: TUnitID;
};

type TForce = {
  forceName: string;
  forceID: string;
  units: TUnit[];  
  discipline?: string;
  forceVersion?: number;
}

type TDicesType = "d4" | "d6" | "d8" | "d10" | "d12";

type TCharacteristics = { name: string; description: string };

type TTechLevel = "simple" | "standard" | "advanced" | "prime";

type TFlaw = { name: string; description: string };

type Taction = "combat" | "utility" | "complex";

type TSpells = {
  name: string;
  spellocity: TDicesType | "target";
  range: string;
  actionType: Taction,
  fizzle?: string;
  weak?: string;
  adequate?: string;
  exemplary?: string;
};

type TWeapon = {
  type: TWeaponType;
  techLevel: TTechLevel;
  numTraits?: number;
  extraTrait?: boolean;
  subtype?: TWeaponSubtype;
  equippedTraits?: TWeaponTrait[];
  numAttack?: number;
  damage?: number;
  bonusAttacks?: number;
  bonusDamage?: number;
  id?: number;
  changeType?: boolean;
  extraWeapon?: boolean;
};

type TWeaponSubtype = "light" | "medium" | "heavy";

type TWeaponType = "melee" | "ranged" | "unarmed";

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
  TWeaponType,
  TFlaw,
  TWeaponSubtype,
  TMainViews,
  TTechLevel,
  TForce,
  TDiscipline
};

