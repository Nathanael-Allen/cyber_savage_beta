import { TCharacteristics } from "../types/types";

const CharacteristicsList: TCharacteristics[] = [
  {
    name: "Active Camo",
    description: 'Always count as in cover unless within 3" of an enemy model',
  },
  {
    name: "Agile",
    description: "This character treats area terrain and obstacles as open ground"
  },
  {
    name: "Avenger",
    description: "When an ally dies strengthen all stats until end of next activation.",
  },
  {
    name: "Berserk",
    description:
      "When below half starting health ignore negative status effects and flaws.",
  },
  {
    name: "Bloodlust",
    description:
      "When targeting a character at or below half of it\'s starting health, gain favorable ranged + melee.",
  },
  {
    name: "Bodyguard",
    description: "When a friendly model within 3\" of this model is the target of a ranged or melee combat action, this model may spend a reaction to swap places with the target model. This model is now the target of the attack and may only defend."
  },
  {
    name: "Command",
    description:
      'Spend a utility action to activate a lower level unactivated ally within 6"',
  },
  {
    name: "Companion",
    description: "Once per round gain favorable on any comparison but only roll a d4."
  },
  {
    name: "Cruel",
    description: "Favorable when attacking a lower level character.",
  },  
  {
    name: "Demented",
    description:
      'Favorable attack when targeting a character that is base-to-base with an objective or holding a token.',
  },
  {
    name: "Determinded",
    description:
      'Strengthen defense stats while base-to-base with an objective or holding a token.',
  },
  {
    name: "Devious",
    description:
      "If this character is base-to-base with an enemy character, if the enemy character moves, this character may make an immediate melee combat action against the enemy character.",
  },
  {
    name: "Dodge",
    description:
      'When targeted with a ranged attack, spend a reaction to make a willpower test against the attacker, if successful make a free move 4" and avoid damage',
  },
  {
    name: "Duelist",
    description:
      "The first time this model reacts with \"duel\" in a turn, it does not spend a reaction token.",
  },
  {
    name: "Enhanced Vision",
    description:
      "Ignore stealthy, invisible and count all charges as visible.",
  },
  {
    name: "Evade",
    description:
      'When charged test willpower vs attacker, if successful spend a reaction, make a free 4" move and the charge fails.',
  },
  {
    name: "Extra Weapon",
    description: "Take an additional standard weapon (melee or ranged).",
  },
  { name: "Fast", description: "+3 speed" },
  {
    name: "Flying",
    description: "This character ignores vertical distance, obstacles, area terrain, and cannot take fall damage. Never benefits from cover.",
  },
  {
    name: "Formidable",
    description:
      "When this model compares it\'s level add 1.",
  },
  {
    name: "Good Luck",
    description:
      "Anytime this model makes a test, defends, attacks, or reacts, if 2 or more of the same number is rolled count them as 1 values higher.",
  },
  {
    name: "Grenadier",
    description:
      'Single use ranged action, (range 8\", d10 damage, 6 explosive) take a single weapon trait.',
  },
  {
    name: "Gunfighter",
    description:
      "The first time this model reacts with shootout each turn, do not spend reaction.",
  },
  { name: "Heavy Armor", description: "Favorable defense -1 speed." },
  {
    name: "Heroic",
    description:
      "Gain favorable attacks when attacking a model of higher level.",
  },
  {
    name: "Honorable",
    description: "Gain favorable and strengthen stats when attacking or defending against a model of the same level.",
  },
  {
    name: "Horrifying",
    description:
      "Any model targeting this model with a melee combat action must test willpower vs this model. If failed weaken attack for the combat action.",
  },
  { name: "Hulking Body", description: "+4 Health, -1 speed" },
  {
    name: "Impervious",
    description: "Glancing hits do 0 damage to this model.",
  },
  {
    name: "invincible",
    description: "The first time this character dies in a match, do not remove it from play. Instead leave it standing with a single HP.",
  },
  {
    name: "Indomitable",
    description: "Favorable willpower when targeted by an effect or spell.",
  },
  {
    name: "Last Stand",
    description:
      "If this model dies it may make a ranged combat action or a 6\" charge",
  },
  {
    name: "Malicious",
    description:
      "Favorable attack stats when targeting a character that has a negative status effect.",
  },
  {
    name: "Medic",
    description:
      "Spend a utility action; heal self or base-to-base ally d6 HP",
  },
  { name: "Mounted", description: "+2 speed, +2 health" },
  { name: "Mystical", description: "Gain a spell" },
  {
    name: "Opportunist",
    description:
      'After taking damage from an attack this model may move up to 3\"',
  },
  {
    name: "Overshield",
    description:
      "The first single attack that would deal damage to this character deals zero damage instead. The shield is removed until the start of this models next activation.",
  },
  {
    name: "Psychic Ward",
    description:
      'Any spells, targeting this character or any characters within 2" of this character, are cast with only TWO dice.',
  },
  {
    name: "Savage",
    description: "Gain favorable after performing a charge action.",
  },
  {
    name: "Rage",
    description:
      "When this character is at or below half it's starting health strengthen all stats.",
  },
  {
    name: "Rampage",
    description:
      "Immediately after slaying a model this character may perform a move action",
  },
  {
    name: "Relentless",
    description:
      "If this character does 0 damage during combat action, duel or shootout immediately make 1 additional single attack.",
  },
  { name: "Regeneration", description: "At the start of each activation heal 2." },
  {
    name: "Scout",
    description:
      "After depoloyment but before the first turn this model may make a sprint or move action. If multiple players have scout, resolve scout actions in order of initiative.",
  },
  {
    name: "Self Destruct",
    description: 'Complex action or on death, make a single d10 attack (deals 6 damage to all models within 3")',
  },
  {
    name: "Small",
    description: "Model cannot see or be seen over obstacles. +2 speed",
  },
  {
    name: "Stealthy",
    description:
      "When this model is in cover a model must test willpower against it to target it with a charge or ranged attack action.",
  },
  {
    name: "Sturdy",
    description:
      "This model cannot be moved by spells, weapon traits, or other game effects.",
  },
  {
    name: "Support",
    description:
      'Friendly characters within 3" may spend this models reaction token as if it were their own.',
  },
  {
    name: "Unyielding",
    description:
      'Favorable all stats if this model has more enemies than friendly models (includes self) within 3\"',
  },
  {
    name: "Volatile",
    description:
      "If this model takes 1 or more damage from a melee attack, deal 1 damage to the attacking model.",
  },
  {
    name: "Wicked",
    description: 'When an enemy dies with 8" strengthen all stats.',
  },
];

export { CharacteristicsList };
