import { TCharacteristics } from "../../types/types";

type props = {characteristic: TCharacteristics, closeModal: () => void}

export default function ComCharacteristicModal({characteristic, closeModal}: props) {
  return (
    <div
      className="z-0 h-full w-full fixed top-0 left-0 bg-white/80 flex justify-center items-center"
      onClick={() => closeModal()}
    >
      <div
        className="z-10 min-h-48 max-h-60 w-56 bg-slate-600 text-white flex flex-col text-center rounded-md relative overflow-scroll overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold w-full bg-slate-900 p-1 rounded-t-md">
          {characteristic.name}
        </h2>
        <p className="m-4">{characteristic.description}</p>
      </div>
    </div>
  );
}
