import { TWeaponTrait } from "../types/types";

const WeaponTraitsList: TWeaponTrait[] = [
  {
    name: "Antagonizing",
    description:
      "(Wd8) if target fails it MUST duel if able (melee only)",
    weaponType: "melee",
    weaponSubtype: "all",
  },
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
    name: "Arcane",
    description: "May shootout vs spells (medium ranged only)",
    weaponType: "ranged",
    weaponSubtype: "medium",
  },
  {
    name: "Blind",
    description: "If a target takes damage from this weapon, target can no longer have priority until end of their next activation.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Bouncing Ammo",
    description:
      'For each miss, select a new target within 6" and make a single attack against it WEAKENED. These attacks cannot generate further attacks of any kind (ranged only).',
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
    description: 'Knockback 1" per 1 point of damage.',
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Critical",
    description: 'Roll a d20 when this weapon is used in combat. If a 20 is rolled, triple the total damage this weapon would deal.',
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Cryo",
    description: "If a target takes damage from this weapon -3 Speed.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "CQC",
    description: "This character may spend a reaction to shootout when target of a charge. Compare shooting dice to melee dice (ranged only)",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Dampening",
    description: "If a target takes damage from this weapon, (Wd8) Target loses all weapon traits.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Daze",
    description: "If a target takes damage from this weapon Unfavorable willpower",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Deflect",
    description: "Favorable defense vs shooting (melee only)",
    weaponType: "melee",
    weaponSubtype: "all",
  },
  {
    name: "Disorient",
    description:
      "If target takes damage from this weapon (Wd8) Target's character traits have no effect other than ones that increase health.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Dispel",
    description:
      "If target takes damage from this weapon, may not cast spells. Nullify any magic magic effects (When targeting terrain or other effects, automatically hit).",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Drag",
    description: "If a target takes damage from this weapon (1 dice willpower test vs target), if target fails move the target b2b with the attacker, optimal range only (ranged only)",
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
    description: 'Make 1 attack with 0 traits to all models within 2" of the target. A model may only be affected by this once during a single combat action (ranged only)',
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Focus Strike",
    description:
      "Start of activation may strengthen melee and weaken defense on self.",
    weaponType: "melee",
    weaponSubtype: "all",
  },
  {
    name: "Humiliating",
    description:
      "If a target takes damage from this weapon, count target as 1 level lower.",
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
    description: "May draw LoS from any friendly model. When targeting a model this way -1 damage.",
    weaponType: "ranged",
    weaponSubtype: "all",
  },
  {
    name: "Indiscriminate",
    description:
      "After performing a melee combat action roll 1 attack on each other model within 1\" of this model",
    weaponType: "melee",
    weaponSubtype: "all",
  },
  {
    name: "Life Drain",
    description: "Each hit from this weapon that deals damage heals this model for 1 health (melee only)",
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
    description: "If a target takes damage from this weapon (Wd8) weaken ranged and melee stats until end of next activation.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Merciless",
    description: "Favorable when attacking a model that doesn't have a reaction token.",
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
    description:
      "Glancing hits do full damage",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Power Up",
    description:
      "Spend a combat action to power up. This weapon gains +1 damage and strengthen the models Mel or Rng Stat until the next time this weapon is used.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Psychotronic",
    description: "If a target takes damage from this weapon (Wd8) move d8 in a scatter dice direction. If this model hits a wall take 1 damage.",
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
    name: "Shattering",
    description: "If a target takes damage from this weapon (Wd8) weaken Defense until end of next activation.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Short Range",
    description: "Half all range intervals +1 damage.",
    weaponType: "ranged",
    weaponSubtype: "heavy",
  },
  {
    name: "Stun",
    description: "If a target takes damage from this weapon they may not perform reactions.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Suppress",
    description: "If target takes damage from this weapon (Wd8) -1 action until end of next activation.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Unstable",
    description: "+1 damage, for each successful hit take 1 damage. (Doesn't stack with life drain)",
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
    name: "Vengful",
    description: "Gain favorable attacks with this weapon after the equipped model has performed a reaction. Lasts until the end of the models next activation.",
    weaponType: "both",
    weaponSubtype: "all",
  },
  {
    name: "Violent",
    description:
      "1 Dice test willpower against target, if target fails they cannot react to attacks or charges from a model with a weapon with this trait.",
    weaponType: "both",
    weaponSubtype: "all",
  },
];

export { WeaponTraitsList }
