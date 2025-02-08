import { TSpells } from "../types/types";

const SpellsList: TSpells[] = [
  { name: "Heal", spellocity: "d6", range: '6"' },
  { name: "Bless", spellocity: "d8", range: '8"' },
  { name: "Purify", spellocity: "d6", range: '8"' },
  { name: "Clairvoyance", spellocity: "d8", range: "self" },
  { name: "Force Field", spellocity: "d8", range: "self" },
  { name: "Brain Control", spellocity: "target", range: '8"' },
  { name: "Shockwave", spellocity: "target", range: 'self AoE3"' },
  { name: "Forked Lightning", spellocity: "target", range: '8"' },
  { name: "Eradicate", spellocity: "target", range: '4"' },
  { name: "Tempest", spellocity: "target", range: '8" AoE3"' },
  { name: "Curse", spellocity: "target", range: '8"' },
  { name: "Mystic Haze", spellocity: "d4", range: '12"' },
  { name: "Corrupt", spellocity: "d8", range: '12" (Target Terrain)' },
  { name: "Telekinesis", spellocity: "target", range: '6"' },
  { name: "Siphon", spellocity: "target", range: '8"' },
  { name: "Summon", spellocity: "d10", range: '4"' },
  { name: "Conjure Weapon", spellocity: "d8", range: "self" },
  { name: "Fireball", spellocity: "target", range: '8"' },
  { name: "Fling", spellocity: "target", range: '6"' },
];

export { SpellsList };
