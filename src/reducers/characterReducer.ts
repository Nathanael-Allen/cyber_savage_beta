import { TUnit } from "../types/types";

type TAction = {type: string, charID: number};

export default function characterReducer(characters: TUnit[], action: TAction) {
  switch (action.type) {
    case "delete": {
      return characters.map((c) => {
        if (action.charID !== c.id) {
          return c;
        }
      })
    }
  }
}