import { TWeaponTrait } from "../types-interfaces/types";

const WeaponTraitsList: TWeaponTrait[] = [
  {
    name: "Assault Weapon",
    description:
      "May make a ranged combat action with this weapon after a sprint action is taken.",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Advanced Optics",
    description: "Ignore cover.",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Blind",
    description: "(Wd8) Cannot have priority.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Bouncing Ammo",
    description:
      'For each miss select a different model within 6" and make a single attack against it. (Can only bounce once)',
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Chamber",
    description: "Melee actions against this model have unfavorable.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Concussive",
    description: 'Knockback 1" per damage.',
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Cryo",
    description: "-3 Speed.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Dampening",
    description: "(Wd8) Target loses all weapon traits.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Daze",
    description: "Unfavorable attack stats.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Deflect",
    description: "Defend ranged with melee.",
    weaponType: "melee",
    weaponSubtype: "all",
  },
  {
    name: "Deteriorate",
    description: "(Wd8) Weaken defense stats.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Disorient",
    description:
      "(Wd8) Targets character traits have no effect other than ones that increase health.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Dispel",
    description:
      "May not cast spells. Nullify any magic magic effects (When targeting terrain or other effects, automatically hit).",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Drag",
    description: "Move target adjacent to self (optimal range only).",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Enhanced Targeting",
    description:
      "Split attacks between multiple targets (only one target may spend a reaction).",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Explosive",
    description: 'All models within 2" of target take 1 hit.',
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Focus Strike",
    description:
      "Start of activation may strengthen melee and weaken defense on self.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Incendiary",
    description: "(Wd8) 1 damage.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Indirect",
    description: "May draw LoS from any friendly model (costs complex action).",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Indiscriminate",
    description:
      "After performing a melee action roll 1 additional attack on each adjacent model.",
    weaponType: "melee",
    weaponSubtype: "all",
  },
  {
    name: "Life Drain",
    description: "Each successful hit heal this model 1 health",
    weaponType: "melee",
    weaponSubtype: "all",
  },
  {
    name: "Long Range",
    description: "Ignore penalties for range intervals",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Maim",
    description: "(Wd8) Weaken attack stats.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Parry",
    description:
      "When defending or dueling in melee, attacker counts as having no weapon traits.",
    weaponType: "melee",
    weaponSubtype: "all",
  },
  {
    name: "Penetrating",
    description: "Glancing hits do 2 damage",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Power Up",
    description:
      "Spend a combat action to power up. Strengthen attack stats and +1 damage on next attack.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Psychotronic",
    description: "(Wd8) Target is moved in a random direction.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Quick Draw",
    description: "Gain priority when reacting with this weapon.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Rapid Fire",
    description: "+1 attack (light weapons only).",
    weaponType: "both",
    weaponSubtype: "light",
  },
  {
    name: "Rending",
    description: "Target gets unfavorable defense stats.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Short Range",
    description: "Half all range intervals +1 damage.",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Stun",
    description: "Target may not perform reactions.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Specialized",
    description: "This weapon may target anyone when disordered.",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Suppress",
    description: "(Wd8) -1 action.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Unwieldy",
    description: "Unfavorable melee, +1 attack (heavy melee weapon only).",
    weaponType: "melee",
    weaponSubtype: "heavy",
  },
  {
    name: "Violent",
    description:
      "Target cannot react to attacks or charges from a model with this weapon trait.",
    weaponType: "both",
    weaponSubtype: "all",
  },
];

export {WeaponTraitsList}