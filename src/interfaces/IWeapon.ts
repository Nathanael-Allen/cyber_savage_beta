interface IWeapon {
  type: "range" | "melee";
  techLevel: "simple" | "standard" | "advanced" | "prime";
  numTraits: number;
};

export default IWeapon;