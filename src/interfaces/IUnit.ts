export default interface IUnit {
  level: 1 | 2 | 3 | 4;
  type: string;
  availableWeapons: string[];
  numTraits: number;
  numSpells?: number;
  equippedTraits?: string[];
  id?: string | number
}
