import { useState } from "react";
import { TCharacteristics } from "../types/types";
import ComCharacteristicModal from "./UtilityComponents/ComCharacteristicModal";

type props = { charList: TCharacteristics[] };

export default function ComEqCharacteristics({ charList }: props) {
  const [openDescription, setOpenDescription] = useState<TCharacteristics | null>(null);
  
  function closeModal() {
    setOpenDescription(null)
  }

  return (
    <div className="">
      <h2 className="text-lg font-semibold bg-slate-800 text-white p-1 rounded-t-md">
        Characteristics
      </h2>
      <ul className="bg-slate-600 text-white rounded-b-md max-h-48 overflow-scroll *:border-b">
        {charList.map((char, index) => {
          return (
            <li key={index} className=""><button className="py-2 w-full underline decoration-dashed hover:text-sky-200" onClick={() => setOpenDescription(char)}>{char.name}</button></li>
          );
        })}
      </ul>
      {openDescription && (
        <ComCharacteristicModal characteristic={openDescription} closeModal={closeModal} />
      )}
    </div>
  );
}
