import IUnit from "../interfaces/IUnit";

const availableUnits: IUnit[] = [
  { level: 1, type: "Grunt", availableWeapons: ["simple ranged"], numTraits: 1 },
  { level: 1, type: "Fighter", availableWeapons: ["simple melee"], numTraits: 1 },
  { level: 2, type: "Trooper", availableWeapons: ["std rng"], numTraits: 1 },
  { level: 2, type: "Warrior", availableWeapons: ["std mel"], numTraits: 1 },
  {
    level: 2,
    type: "Outrider",
    availableWeapons: ["simple melee", "simple ranged"],
    numTraits: 1,
  },
  { level: 2, type: "Mage", availableWeapons: ["simple melee"], numTraits: 1 },
  { level: 3, type: "Gunner", availableWeapons: ["simple ranged"], numTraits: 1 },
  { level: 3, type: "Vanguard", availableWeapons: ["simple melee"], numTraits: 1 },
  { level: 3, type: "Mercenary", availableWeapons: ["simple melee"], numTraits: 1 },
  { level: 3, type: "Magus", availableWeapons: ["simple melee"], numTraits: 1 },
  { level: 4, type: "Veteran", availableWeapons: ["simple ranged"], numTraits: 1 },
  { level: 4, type: "Champion", availableWeapons: ["simple melee"], numTraits: 1 },
  { level: 4, type: "Commando", availableWeapons: ["simple melee"], numTraits: 1 },
  { level: 4, type: "Archmage", availableWeapons: ["simple melee"], numTraits: 1 },
];

export default availableUnits;
