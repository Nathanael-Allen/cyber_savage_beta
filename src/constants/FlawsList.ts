import { TFlaw } from "../types/types";

const FlawsList: TFlaw[] = [
  {name: "Arrogant", description: "Can never attack an enemy that has been attacked by an allied model this turn."},
  {name: "Bad Luck", description: "Anytime this model rolls, if any of the numbers rolled are the same their values are counted as one value lower."},
  {name: "Late to the Party", description: "Enters on turn 2."},
  {name: "Hesitant", description: "Cannot react."},
  {name: "Stupid", description: "Cannot scor objectives."},
  {name: "Confused", description: "If this model fails to do damage with an attack, become stunned (cannot react)."},
  {name: "Clumsy", description: "All hits taken count as 1 concussive."},
  {name: "Cowardly", description: "When attacking a model of a higher level gain unfavorable."},
  {name: "Compassionate", description: "When attacking a model of a lower level gain unfavorable."},
  {name: "Superstitious", description: "Unfavorable when defending against spells."},
  {name: "Blind Fury", description: "Must make a combat action against the closest valid target within 12\"."},
  {name: "City Slicker", description: "Rough terrain costs an additional +1."},
  {name: "Slow", description: "-2 speed."},
  {name: "Impatient", description: "Must be the first activated model each turn."},
  {name: "Procrastiinator", description: "Must be the last activated model each turn."},
  {name: "Old", description: "-2 health."},
  {name: "Inebriated", description: "Replace movement with a d8"},
  {name: "Frail", description: "Unfavorable willpower on status effect tests."},
  {name: "Weak Stomach", description: "When an ally dies within 3\" of this model -1 priority."},
  {name: "Bad Equipment", description: "Glancing hits do -1 damage."},
]

export {FlawsList}