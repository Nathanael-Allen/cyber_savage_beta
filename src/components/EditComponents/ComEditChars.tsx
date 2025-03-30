import { CharacteristicsList } from "../../constants/CharacteristicsList";
import { TAction, TActionType } from "../../reducers/editReducer";
import { TCharacteristics } from "../../types/types";

type props = { equippedChars: TCharacteristics[], dispatch: ({ type: TActionType, action: TAction }) }

export default function ComEditChars(equippedChars) {

}
