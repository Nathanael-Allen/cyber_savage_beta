import { TSpells } from "../types/types";

const SpellsList: TSpells[] = [
  { name: "Heal", spellocity: "d6", actionType: "combat", range: '6"', fizzle: "Target takes 2dmg", weak: "Restore 2hp", adequate: "Restore 2hp", exemplary: "Restore 6hp"},
  { name: "Bless", spellocity: "d8", actionType: "utility", range: '8"', fizzle: "Target weaken stats", weak: "Favorable all stats", adequate: "Strengthen all stats", exemplary: "Strengthen and favorable all stats"},
  { name: "Barrier", spellocity: "d6", actionType: "utility", range: "6\"", fizzle: 'Caster stun', weak: 'Place 1x3" obstacle', adequate: 'Place 2x3" obstacle', exemplary: 'Place 3x3" obstacle'},
  { name: "Magic Mortar", spellocity: "target", actionType: "combat", range: '7"-15"', fizzle: "Caster takes 2dmg", weak: "4dmg indirect", adequate: "5dmg indirect", exemplary: "6dmg indirect"},
  { name: "Fling", spellocity: "target", actionType: "combat", range: '6"', fizzle: "Caster move d\"8 scatter", weak: "1dmg target knockback 2\"", adequate: "2dmg target knockback 4\"", exemplary: "3dmg target knockback 6\""},
  { name: "Force Field", spellocity: "d6", actionType: "utility", range: "self", fizzle: "Stun self and allies within 1\"", weak: "Self and all models within 1\" strengthen defense vs ranged", adequate: "Self and all models within 3\" strengthen defense vs ranged", exemplary: "Self and all models within 5\" strengthen defense vs ranged"},
  { name: "Brain Control", spellocity: "target", actionType: "combat", range: '8"', fizzle: "Caster weaken willpower", weak: "Make 1 action", adequate: "Make 2 actions", exemplary: "Make 2 actions and suppress"},
  { name: "Shockwave", spellocity: "target", actionType: "combat", range: 'self AoE 3"', fizzle: "Caster take 1dmg", weak: "2dmg Concussive", adequate: "3dmg Concussive", exemplary: "4dmg Concussive"},
  { name: "Forked Lightning", spellocity: "target", actionType: "combat", range: '8"', fizzle: "Caster take 2 dmg", weak: "3dmg select another target within 4\"", adequate: "4dmg select another target within 6\"", exemplary: "5dmg select another target within 8\""},
  { name: "Eradicate", spellocity: "target", actionType: "combat", range: '4"', fizzle: "Caster must take (lvl)dmg", weak: "(targets lvl) dmg", adequate: "2x(targets lvl) dmg", exemplary: "3x(targets lvl) dmg"},
  { name: "Tempest", spellocity: "target", actionType: "combat", range: '8" AoE 3"', fizzle: "Caster weaken will", weak: "3dmg cryo", adequate: "4dmg cryo", exemplary: "5dmg cryo"},
  { name: "Curse", spellocity: "target", actionType: "utility", range: '8"', fizzle: "Target strengthen all stats", weak: "Unfavorable stats (cannot heal)", adequate: "Weaken all stats (Cannot heal)", exemplary: "Weaken and unfavorable all stats (Cannot heal)"},
  { name: "Mystic Haze", spellocity: "d4", actionType: "utility", range: '12"', fizzle: "Caster become blind", weak: "3\"x1\" blocking LoS", adequate: "6\"x1\" blocking LoS", exemplary: "8\"x1\" blocking LoS"},
  { name: "Corrupt", spellocity: "d8", actionType: "utility", range: '12" (Target Terrain)', fizzle: "Caster takes 1 dmg", weak: "Dangerous d6", adequate: "Dangerous d8", exemplary: "Dangerous d12"},
  { name: "Telekinesis", spellocity: "target", actionType: "utility", range: '6"', fizzle: "Target immobilized", weak: "Move target 6\"", adequate: "Move target 8\"", exemplary: "Move target 12\""},
  { name: "Siphon", spellocity: "target", actionType: "combat", range: '8"', fizzle: "Heal target 2, caster takes 2 dmg", weak: "Target 3dmg, heal self 3hp", adequate: "Target 4dmg, heal self 4hp", exemplary: "Target 5dmg, heal self 5hp"},
  { name: "Summon", spellocity: "d10", actionType: "utility", range: '4"', fizzle: "Enemy has control of summon", weak: "lvl 1 lasts 1 turn Choose weapon. Only characteristic 'stupid'", adequate: "lvl 1 lasts 2 turn Choose weapon. Only characteristic 'stupid'", exemplary: "lvl 1 lasts 3 turn Choose weapon. Only characteristic 'stupid'"},
  { name: "Discombobulate", spellocity: "target", actionType: "utility", range: '6"', fizzle: "Caster stunned", weak: "AoE 3\" stun", adequate: "AoE 3\" stun and exhaust", exemplary: "AoE 3\" stun, exhaust, -2 speed"},
  { name: "Fireball", spellocity: "target", actionType: "utility", range: '8"', fizzle: "Caster takes 2dmg", weak: "4dmg Explosive", adequate: "5dmg Explosive", exemplary: "5dmg Explosive"},
  { name: "Ethereal Weapon", spellocity: "d8", actionType: "complex", range: '4"', fizzle: "daze self", weak: "Skill d6 weapon construct*", adequate: "Skill d8 weapon construct", exemplary: "Skill d10 weapon construct"},
  { name: "Zeta Beams", spellocity: "target", actionType: "combat", range: '6"', fizzle: "Caster takes 2 dmg", weak: "3dmg (up to 4 targets)", adequate: "4dmg (up to 4 targets)", exemplary: "5dmg (up to 4 targets)"},
];

export { SpellsList };
