import IUnit from "../interfaces/IUnit";

const availableUnits: IUnit[] = [
  { level: 1, type: "Grunt", availableWeapons: ["simple rng"], numTraits: 1 },
  { level: 1, type: "Fighter", availableWeapons: ["simple mel"], numTraits: 1 },
  {
    level: 2,
    type: "Trooper",
    availableWeapons: ["standard rng"],
    numTraits: 1,
  },
  {
    level: 2,
    type: "Warrior",
    availableWeapons: ["standard mel"],
    numTraits: 1,
  },
  {
    level: 2,
    type: "Outrider",
    availableWeapons: ["simple mel", "simple rng"],
    numTraits: 1,
  },
  {
    level: 2,
    type: "Mage",
    availableWeapons: ["simple mel"],
    numTraits: 2,
    numSpells: 2,
  },
  {
    level: 3,
    type: "Gunner",
    availableWeapons: ["advanced rng"],
    numTraits: 2,
  },
  {
    level: 3,
    type: "Vanguard",
    availableWeapons: ["advanced mel"],
    numTraits: 2,
  },
  {
    level: 3,
    type: "Mercenary",
    availableWeapons: ["standard mel", "standard rng"],
    numTraits: 2,
  },
  {
    level: 3,
    type: "Magus",
    availableWeapons: ["standard mel"],
    numTraits: 2,
    numSpells: 3,
  },
  { level: 4, type: "Veteran", availableWeapons: ["prime rng"], numTraits: 2 },
  {
    level: 4,
    type: "Champion",
    availableWeapons: ["prime mel"],
    numTraits: 2,
  },
  {
    level: 4,
    type: "Commando",
    availableWeapons: ["advanced mel", "advanced rng"],
    numTraits: 2,
  },
  {
    level: 4,
    type: "Archmage",
    availableWeapons: ["advancded mel"],
    numTraits: 2,
    numSpells: 4,
  },
];

export default availableUnits;
