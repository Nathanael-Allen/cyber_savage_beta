import { useState } from "react";
import { TCharacteristics } from "../types/types";

type props = { charList: TCharacteristics[] };

export default function ComEqCharacteristics({ charList }: props) {
  const [openDescription, setOpenDescription] = useState<TCharacteristics | null>(null);
    
  return (
    <div className="">
      <h2 className="text-lg font-semibold bg-slate-800 text-white p-1 rounded-t-md">
        Characteristics
      </h2>
      <ul className="bg-slate-600 text-white rounded-b-md max-h-48 overflow-scroll *:border-b">
        {charList.map((char) => {
          return (
            <li className=""><button className="py-2 w-full underline decoration-dashed hover:text-sky-200" onClick={() => setOpenDescription(char)}>{char.name}</button></li>
          );
        })}
      </ul>
      {openDescription && (
        <div className="z-0 h-full w-full fixed top-0 left-0 bg-white/30 flex justify-center items-center"  onClick={() => setOpenDescription(null)}>
          <div className="z-10 min-h-48 w-56 bg-slate-600 text-white flex flex-col gap-4 text-center rounded-md relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute text-3xl font-bold -top-9 right-2 text-red-800"  onClick={() => setOpenDescription(null)}>close</button>
            <h2 className="text-xl font-semibold w-full bg-slate-900 p-1 rounded-t-md">{openDescription.name}</h2>
            <p className="">{openDescription.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
