import IUnit from "../interfaces/IUnit";

const availableUnits: IUnit[] = [
  { level: 1, type: "Grunt", availableWeapons: [{type: "ranged", techLevel: "simple"}], numTraits: 1 },
  { level: 1, type: "Fighter", availableWeapons: [{type: "melee", techLevel: "simple"}], numTraits: 1 },
  {
    level: 2,
    type: "Trooper",
    availableWeapons: [{type: "ranged", techLevel: "standard"}],
    numTraits: 1,
  },
  {
    level: 2,
    type: "Warrior",
    availableWeapons: [{type: "melee", techLevel: "standard"}],
    numTraits: 1,
  },
  {
    level: 2,
    type: "Outrider",
    availableWeapons: [{type: "melee", techLevel: "simple"}, {type: "ranged", techLevel: "simple"}],
    numTraits: 1,
  },
  {
    level: 2,
    type: "Mage",
    availableWeapons: [{type: "melee", techLevel: "simple"}],
    numTraits: 2,
    numSpells: 2,
  },
  {
    level: 3,
    type: "Gunner",
    availableWeapons: [{type: "ranged", techLevel: "advanced"}],
    numTraits: 2,
  },
  {
    level: 3,
    type: "Vanguard",
    availableWeapons: [{type: "melee", techLevel: "advanced"}],
    numTraits: 2,
  },
  {
    level: 3,
    type: "Mercenary",
    availableWeapons: [{type: "ranged", techLevel: "standard"}, {type: "melee", techLevel: "standard"}],
    numTraits: 2,
  },
  {
    level: 3,
    type: "Magus",
    availableWeapons: [{type: "melee", techLevel: "standard"}],
    numTraits: 2,
    numSpells: 3,
  },
  { level: 4, type: "Veteran", availableWeapons: [{type: "ranged", techLevel: "advanced"}], numTraits: 2 },
  {
    level: 4,
    type: "Champion",
    availableWeapons: [{type: "melee", techLevel: "advanced"}],
    numTraits: 2,
  },
  {
    level: 4,
    type: "Commando",
    availableWeapons: [{type: "ranged", techLevel: "advanced"}, {type: "melee", techLevel: "advanced"}],
    numTraits: 2,
  },
  {
    level: 4,
    type: "Archmage",
    availableWeapons: [{type: "melee", techLevel: "advanced"}],
    numTraits: 2,
    numSpells: 4,
  },
];

export default availableUnits;
