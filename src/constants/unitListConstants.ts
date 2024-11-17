 import { IUnit } from "../interfaces/IUnit";

const availableUnits: IUnit[] = [
  {
    level: 1,
    type: "Grunt",
    availableWeapons: [{ type: "ranged", techLevel: "simple" }],
    numTraits: 1,
    speed: 6,
    health: 12,
    diceMelee: "d4",
    diceRanged: "d6",
    diceDefense: "d6",
    diceWillpower: "d4",
  },
  {
    level: 1,
    type: "Fighter",
    availableWeapons: [{ type: "melee", techLevel: "simple" }],
    numTraits: 1,
    speed: 7,
    health: 12,
    diceMelee: "d6",
    diceRanged: "d4",
    diceDefense: "d6",
    diceWillpower: "d4"
  },
  {
    level: 2,
    type: "Trooper",
    availableWeapons: [{ type: "ranged", techLevel: "standard" }],
    numTraits: 1,
    speed: 6,
    health: 14,
    diceMelee: "d4",
    diceRanged: "d8",
    diceDefense: "d6",
    diceWillpower: "d6",
  },
  {
    level: 2,
    type: "Warrior",
    availableWeapons: [{ type: "melee", techLevel: "standard" }],
    numTraits: 1,
    speed: 7,
    health: 14,
    diceMelee: "d8",
    diceRanged: "d4",
    diceDefense: "d6",
    diceWillpower: "d6",
  },
  {
    level: 2,
    type: "Outrider",
    availableWeapons: [
      { type: "melee", techLevel: "simple" },
      { type: "ranged", techLevel: "simple" },
    ],
    numTraits: 1,
    speed: 6,
    health: 14,
    diceMelee: "d6",
    diceRanged: "d6",
    diceDefense: "d6",
    diceWillpower: "d6",    
  },
  {
    level: 2,
    type: "Mage",
    availableWeapons: [{ type: "melee", techLevel: "simple" }],
    numTraits: 2,
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
    type: "Gunner",
    availableWeapons: [{ type: "ranged", techLevel: "advanced" }],
    numTraits: 2,
    speed: 6,
    health: 16,
    diceMelee: "d6",
    diceRanged: "d10",
    diceDefense: "d8",
    diceWillpower: "d6",
  },
  {
    level: 3,
    type: "Vanguard",
    availableWeapons: [{ type: "melee", techLevel: "advanced" }],
    numTraits: 2,
    speed: 7,
    health: 16,
    diceMelee: "d10",
    diceRanged: "d6",
    diceDefense: "d8",
    diceWillpower: "d6",
  },
  {
    level: 3,
    type: "Mercenary",
    availableWeapons: [
      { type: "ranged", techLevel: "standard" },
      { type: "melee", techLevel: "standard" },
    ],
    numTraits: 2,
    speed: 6,
    health: 16,
    diceMelee: "d8",
    diceRanged: "d8",
    diceDefense: "d8",
    diceWillpower: "d6",
  },
  {
    level: 3,
    type: "Magus",
    availableWeapons: [{ type: "melee", techLevel: "standard" }],
    numTraits: 2,
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
    type: "Veteran",
    availableWeapons: [{ type: "ranged", techLevel: "advanced" }],
    numTraits: 3,
    speed: 6,
    health: 18,
    diceMelee: "d8",
    diceRanged: "d12",
    diceDefense: "d10",
    diceWillpower: "d8",
  },
  {
    level: 4,
    type: "Champion",
    availableWeapons: [{ type: "melee", techLevel: "advanced" }],
    numTraits: 3,
    speed: 7,
    health: 18,
    diceMelee: "d12",
    diceRanged: "d8",
    diceDefense: "d10",
    diceWillpower: "d8",
  },
  {
    level: 4,
    type: "Commando",
    availableWeapons: [
      { type: "ranged", techLevel: "advanced" },
      { type: "melee", techLevel: "advanced" },
    ],
    numTraits: 3,
    speed: 6,
    health: 18,
    diceMelee: "d10",
    diceRanged: "d10",
    diceDefense: "d10",
    diceWillpower: "d8",
  },
  {
    level: 4,
    type: "Archmage",
    availableWeapons: [{ type: "melee", techLevel: "advanced" }],
    numTraits: 2,
    numSpells: 4,
    speed: 6,
    health: 16,
    diceMelee: "d8",
    diceRanged: "d8",
    diceDefense: "d10",
    diceWillpower: "d10",
  },
];

export default availableUnits;
