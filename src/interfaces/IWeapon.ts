interface IWeapon {
  type: "ranged" | "melee" | "unarmed";
  techLevel: "simple" | "standard" | "advanced";
  numTraits?: number;
  subtype?: "light" | "medium" | "heavy";
  equippedTraits?: string[];
}

export default IWeapon;
