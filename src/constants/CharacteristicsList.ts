import { TCharacteristics } from "../types/types";

const CharacteristicsList: TCharacteristics[] = [
  {
    name: "Active Camo",
    description: 'Always count as in cover unless within 3" of an enemy model',
  },
  {
    name: "Adaptive",
    description: 'After this model has been made the target of an attack, all models attackign this model count as unfavorable for the rest of the round.',
  },
  {
    name: "Ambush",
    description:
      "Combat action, go on ambush. When an enemy within 6\" and LoS activate this model may make a charge against that model at the end or beginning of any of it\'s actions.",
  },
  {
    name: "Agile",
    description: "Ignore climbing, area terrain, and obstacles"
  },
  {
    name: "Avenger",
    description: "When an ally dies withing 8\" strengthen all stats.",
  },
  {
    name: "Berserk",
    description:
      "When below half starting health ignore negative status effects and flaws.",
  },
  {
    name: "Bloodlust",
    description:
      "When targeting a model with below half of it\'s starting health stat favorable ranged + melee.",
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
      "Spend a reaction at any point when a model makes a move or charge action while base to base with this model; make a close combat action against this target.",
  },
  {
    name: "Dodge",
    description:
      'When targeted with a ranged attack, spend a reaction to make a willpower test against the attacker, if successful make a free move 4" and avoid damage',
  },
  {
    name: "Duelist",
    description:
      "The first time this model reacts with \"duel\" in a turn does not spend a reacion token.",
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
    name: "Fly",
    description: "Spend complex action, ignore terrain and move up to 20\"",
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
    name: "Honerable",
    description: "Gain favorable when attacking a model of the same level.",
  },
  {
    name: "Horrifying",
    description:
      "Any model targeting this model with a combat action must test willpower vs this model. If failed weaken attack for the combat action.",
  },
  { name: "Hulking Body", description: "+4 Health" },
  {
    name: "Impervious",
    description: "Glancing hits do 0 damage to this model.",
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
    name: "Medic",
    description:
      "Spend a utility action; roll 4 dice (willpower d6) heal 2hp per success.",
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
      "Start each round with one overshield token. Spend this token after taking damage gaining invincible (-1 incoming damage).",
  },
  {
    name: "Overwatch",
    description:
      "Spend a combat action. If an enemy activates in LoS, this model may make a ranged combat action against the enemy during any point of the enemies activation.",
  },
  {
    name: "Psychic Dominance",
    description:
      'Enemy spellcasters within 12\" replace their Spellocity with this models willpower value.',
  },
  {
    name: "Savage",
    description: "Gain favorable after performing a charge action.",
  },
  {
    name: "Rage",
    description:
      "When this model is below half it's starting health strengthen all stats.",
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
    name: "Support",
    description:
      'Spend a utility action to restore a single models reaction token within 3\"',
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
    name: "Ward",
    description: "Gain priority even when targeted by enemy spells",
  },
  {
    name: "Weapons Specialist",
    description: "All weapons have an extra trait.",
  },
  {
    name: "Wicked",
    description: 'When an enemy dies with 8" strengthen all stats.',
  },
];

export { CharacteristicsList };
