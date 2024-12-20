import { TUnit } from "../types/types";

const availableUnits: TUnit[] = [
  {
    level: 1,
    unitClass: "Grunt",
    equippedWeapons: [{ type: "ranged", techLevel: "simple" }],
    numCharacteristics: 1,
    speed: 6,
    health: 12,
    diceMelee: "d4",
    diceRanged: "d6",
    diceDefense: "d6",
    diceWillpower: "d4",
  },
  {
    level: 1,
    unitClass: "Fighter",
    equippedWeapons: [{ type: "melee", techLevel: "simple" }],
    numCharacteristics: 1,
    speed: 7,
    health: 12,
    diceMelee: "d6",
    diceRanged: "d4",
    diceDefense: "d6",
    diceWillpower: "d4"
  },
  {
    level: 2,
    unitClass: "Trooper",
    equippedWeapons: [{ type: "ranged", techLevel: "standard" }],
    numCharacteristics: 1,
    speed: 6,
    health: 14,
    diceMelee: "d4",
    diceRanged: "d8",
    diceDefense: "d6",
    diceWillpower: "d6",
  },
  {
    level: 2,
    unitClass: "Warrior",
    equippedWeapons: [{ type: "melee", techLevel: "standard" }],
    numCharacteristics: 1,
    speed: 7,
    health: 14,
    diceMelee: "d8",
    diceRanged: "d4",
    diceDefense: "d6",
    diceWillpower: "d6",
  },
  {
    level: 2,
    unitClass: "Mercenary",
    equippedWeapons: [
      { type: "melee", techLevel: "standard" },
      { type: "ranged", techLevel: "standard" },
    ],
    numCharacteristics: 1,
    speed: 6,
    health: 14,
    diceMelee: "d6",
    diceRanged: "d6",
    diceDefense: "d6",
    diceWillpower: "d6",    
  },
  {
    level: 2,
    unitClass: "Mage",
    equippedWeapons: [{ type: "melee", techLevel: "simple" }],
    numCharacteristics: 2,
    numSpells: 2,
    speed: 6,
    health: 12,
    diceMelee: "d4",
    diceRanged: "d4",
    diceDefense: "d6",
    diceWillpower: "d6",
  },
  {
    level: 3,
    unitClass: "Veteran",
    equippedWeapons: [{ type: "ranged", techLevel: "advanced" }],
    numCharacteristics: 2,
    speed: 6,
    health: 16,
    diceMelee: "d6",
    diceRanged: "d10",
    diceDefense: "d8",
    diceWillpower: "d6",
  },
  {
    level: 3,
    unitClass: "Vanguard",
    equippedWeapons: [{ type: "melee", techLevel: "advanced" }],
    numCharacteristics: 2,
    speed: 7,
    health: 16,
    diceMelee: "d10",
    diceRanged: "d6",
    diceDefense: "d8",
    diceWillpower: "d6",
  },
  {
    level: 3,
    unitClass: "Raider",
    equippedWeapons: [
      { type: "ranged", techLevel: "advanced" },
      { type: "melee", techLevel: "advanced" },
    ],
    numCharacteristics: 2,
    speed: 6,
    health: 16,
    diceMelee: "d8",
    diceRanged: "d8",
    diceDefense: "d8",
    diceWillpower: "d6",
  },
  {
    level: 3,
    unitClass: "Magus",
    equippedWeapons: [{ type: "melee", techLevel: "standard" }],
    numCharacteristics: 2,
    numSpells: 3,
    speed: 6,
    health: 14,
    diceMelee: "d6",
    diceRanged: "d6",
    diceDefense: "d8",
    diceWillpower: "d8",
  },
  {
    level: 4,
    unitClass: "Commando",
    equippedWeapons: [{ type: "ranged", techLevel: "advanced" }],
    numCharacteristics: 3,
    speed: 6,
    health: 18,
    diceMelee: "d8",
    diceRanged: "d12",
    diceDefense: "d10",
    diceWillpower: "d8",
  },
  {
    level: 4,
    unitClass: "Champion",
    equippedWeapons: [{ type: "melee", techLevel: "advanced" }],
    numCharacteristics: 3,
    speed: 7,
    health: 18,
    diceMelee: "d12",
    diceRanged: "d8",
    diceDefense: "d10",
    diceWillpower: "d8",
  },
  {
    level: 4,
    unitClass: "Marauder",
    equippedWeapons: [
      { type: "ranged", techLevel: "advanced" },
      { type: "melee", techLevel: "advanced" },
    ],
    numCharacteristics: 3,
    speed: 6,
    health: 18,
    diceMelee: "d10",
    diceRanged: "d10",
    diceDefense: "d10",
    diceWillpower: "d8",
  },
  {
    level: 4,
    unitClass: "Archmage",
    equippedWeapons: [{ type: "melee", techLevel: "advanced" }],
    numCharacteristics: 2,
    numSpells: 4,
    speed: 6,
    health: 16,
    diceMelee: "d8",
    diceRanged: "d8",
    diceDefense: "d10",
    diceWillpower: "d10",
  },
];

export {availableUnits};
