// Types
type TUnitID = string | number;

type TForceViews = "addCharacters" | "equippedCharacters" | "editCharacter" | "characterDetails" | "force" | "disciplines";
type TEditViews = "main" | "characteristics" | "spells" | "weapons"


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
  speed: number;
  health: number;
  diceMelee: TDicesType;
  diceRanged: TDicesType;
  diceDefense: TDicesType;
  diceWillpower: TDicesType;
  numSpells: number;
  equippedSpells: TSpells[];
  equippedCharacteristics: TCharacteristics[];
  bonusHealth: number;
  bonusSpeed: number;
  extraWeapon: boolean;
  extraSpell: boolean;
  hasFlaw: boolean;
  imagePath?: string;
  unitName?: string;
  id?: TUnitID;
};

type TForce = {
  forceName: string;
  forceID: string;
  characters: TUnit[];
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
  numTraits: number;
  equippedTraits: TWeaponTrait[];
  numAttacks: number;
  damage: number;
  bonusAttacks: number;
  bonusDamage: number;
  extraTrait: boolean;
  changeType: boolean;
  extraWeapon: boolean;
  subtype: TWeaponSubtype;
  id?: number;
};

type TWeaponSubtype = "none" | "light" | "medium" | "heavy";

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
  TForceViews,
  TEditViews,
  TTechLevel,
  TForce,
  TDiscipline
};

