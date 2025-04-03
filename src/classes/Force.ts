import { TForce } from "../types/types"

export default class Force {

  static getTotalPoints(force: TForce) {
    return force.characters.map((char) => char.level)  
  }
}