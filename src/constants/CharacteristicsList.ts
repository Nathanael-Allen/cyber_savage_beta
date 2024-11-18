import { TCharacteristics } from "../types-interfaces/types";

const CharacteristicsList: TCharacteristics[] = [
  {
    name: "Active Camo",
    description: 'Always count as in cover unless within 3" of an enemy model',
  },
  {
    name: "Ambush",
    description:
      "Complex action, go on ambush. When an enemy within charge range and LoS activates, this model may make a charge against that model at the end or beginning of any of it's actions.",
  },
  {
    name: "Avenger",
    description: 'When an ally dies within 8" strengthen attack stats.',
  },
  {
    name: "Berserk",
    description:
      "When below half starting health ignore negative status effects and flaws.",
  },
  {
    name: "Bloodlust",
    description:
      "When targeting a model with below half of its starting health, strengthen attack.",
  },
  {
    name: "Command",
    description:
      'Spend a utility action to activate a lower level unactivated ally within 6"',
  },
  {
    name: "Cruel",
    description: "Favorable when attacking a lower level character.",
  },
  {
    name: "CQC",
    description:
      "This model may spend a reaction to shootout when target of charge. Comparing shooting dice to melee dice.",
  },
  {
    name: "Determinded",
    description:
      'Strengthen defense stats while within 1" of a controlled objective.',
  },
  {
    name: "Devious",
    description:
      "When a model that is base to base with this model makes a move or charge action, spend a reaction to make an attack against that model.",
  },
  {
    name: "Dodge",
    description:
      'When targeted with a ranged attack, spend a reaction to make a willpower test against the attacker, if successful make a free move 4" and avoid damage',
  },
  {
    name: "Duelist",
    description:
      "The first time this model makes a duel action do not spend a reaction",
  },
  {
    name: "Enhanced Vision",
    description:
      "Ignore active camo, stealthy, and all charges count as visible.",
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
    name: "Fly",
    description: 'Use sprint action, ignore terrain and move up to 16"',
  },
  {
    name: "Formidable",
    description:
      "This model counts as one level higher for all purposes other than team construction.",
  },
  {
    name: "Good Luck",
    description:
      "Anytime this model makes a test, matching dice rolls are counted as one value higher.",
  },
  {
    name: "Grenadier",
    description:
      'Make a ranged attack action with 8" range, d10 dmg, and explosive. Can add 1 weapon trait to the grenade. (single use per game)',
  },
  {
    name: "Gunfighter",
    description:
      "The first time this model reacts with shootout each turn, do not spend reaction.",
  },
  { name: "Heavy Armor", description: "Gain favorable defense rolls" },
  {
    name: "Heroic",
    description:
      "Gain favorable attacks when attacking a model of higher level.",
  },
  {
    name: "Honerable",
    description: "Gain favorable when attacking a model of the same level.",
  },
  {
    name: "Horrifying",
    description:
      "Any model making a melee attack against this model must pass a willpower test against this models willpower. On fail weaken attack for the melee action.",
  },
  { name: "Hulking Body", description: "+4 Health" },
  {
    name: "Impervious",
    description: "This model takes no damage from glancing hits.",
  },
  {
    name: "Indomitable",
    description: "Favorable willpower on all willpower tests.",
  },
  {
    name: "Last Stand",
    description:
      "On death if this model still has not activated, spend the activation to make a charge or attack action.",
  },
  {
    name: "Medic",
    description:
      "Spend utility action to roll 4 willpower tests against willpower(d6). Heal 2hp per success. Can target self or adjacent ally.",
  },
  { name: "Mounted", description: "+2 speed, +2 health" },
  { name: "Mystical", description: "Gain a spell" },
  {
    name: "Outmaneuver",
    description:
      'After performing a combat action this model may spend a reaction to immediately move up to 4"',
  },
  {
    name: "Overshield",
    description:
      "Start with an overshield token that strengthens defense while equipped. Lose this token after taking damage, token recharges each round.",
  },
  {
    name: "Overwatch",
    description:
      "Spend combat action to activate, while active if a model moves within LoS you may choose to make a ranged attack against the model. (One attack per activation)",
  },
  { name: "Pathfinder", description: "Ignore area terrain and obstacles" },
  {
    name: "Psychic Dominance",
    description:
      'Enemy Spellcasters within 8" roll all spells vs this models willpower.',
  },
  {
    name: "Savage",
    description: "Gain favorable after performing a charge action.",
  },
  {
    name: "Rage",
    description:
      "Gain favorable on all combat actions while below half health.",
  },
  { name: "Regeneration", description: "Heal 2 at the start of each round." },
  {
    name: "Scout",
    description:
      "After depoloyment but before the first turn this model may make a sprint action. If multiple players have scout, resolve in order of initiative.",
  },
  {
    name: "Self Destruct",
    description: 'On death make a 6 damage, d10 attack to all models within 3"',
  },
  {
    name: "Small",
    description: "Model cannot see or be seen over obstacles. +2 speed",
  },
  {
    name: "Stealthy",
    description:
      "When this model is in cover any model making a charge or ranged attack action against this model must first pass a willpower test against this model.",
  },
  {
    name: "Super Strength",
    description:
      'After resolving a melee attack by this model move the target 4" directly away regardless if any damage was done. (Does not stack with concussive)',
  },
  {
    name: "Unyielding",
    description:
      'Strengthen a stat at the start of this models activation, if this model has more enemies than allies within 3"',
  },
  {
    name: "Volatile",
    description:
      "After defending against a melee attack if this model took damage the attcking model takes 1 damage.",
  },
  {
    name: "Weapons Specialist",
    description: "This models weapons gain an extra trait",
  },
  {
    name: "Wicked",
    description: 'When an enemy dies with 8" strengthen attack stats',
  },
];

export { CharacteristicsList };
