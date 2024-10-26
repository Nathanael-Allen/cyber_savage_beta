interface IWeapon {
  type: "ranged" | "melee" | "unarmed";
  techLevel: "simple" | "standard" | "advanced";
  numTraits?: number;
  subType?: "light" | "medium" | "heavy"
};

export default IWeapon;