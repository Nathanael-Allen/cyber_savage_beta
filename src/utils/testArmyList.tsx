import { IUnit } from "../interfaces/IUnit"

const testArmyList: IUnit[] = [
  {
    type: "Grunt",
    level: 1,
    availableWeapons: [{type: "ranged", techLevel: "simple"}],
    numTraits: 1,
    equippedTraits: ["Heavy Armor"]
  },
  {
    level: 2,
    type: "Warrior",
    availableWeapons: [{type: "melee", techLevel: "standard", subtype: "medium", equippedTraits: ["Maim"]}],
    numTraits: 1,
    equippedTraits: ["Evade", "Dodge"],
    equippedFlaw: ["Clumsy"]
  },
  {
    level: 2,
    type: "Mage",
    availableWeapons: [{type: "melee", techLevel: "simple", subtype: "heavy"}],
    numTraits: 2,
    numSpells: 2,
    equippedTraits: ["Evade", "Dodge"],
    equippedSpells: ["Heal", "Purify"]
  }
]

export default testArmyList;