import { TSpells } from "../../types/types"

type props = {spell: TSpells, closeModal: () => void}

export default function ComSpellModal({spell, closeModal}: props) {
  return (
    <div
    className="z-0 h-full w-full fixed top-0 left-0 bg-white/80 flex justify-center items-center"
    onClick={() => closeModal()}
  >
    <div
      className="z-10 min-h-48 max-h-80 w-56 bg-slate-600 text-white flex flex-col text-center rounded-md relative"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-xl font-semibold w-full bg-slate-900 p-1 rounded-t-md">
        {spell.name}
      </h2>
      <div className="mx-2 pb-8 overflow-scroll overscroll-contain">
        <p className="">
          <span className="font-semibold">Action:</span>{" "}
          {spell.actionType}
        </p>
        <p className="">
          <span className="font-semibold">Range:</span>{" "}
          {spell.range}
        </p>
        <p className="">
          <span className="font-semibold">Spellocity:</span>{" "}
          {spell.spellocity}
        </p>
        <p className="">
          <span className="font-semibold">Fizzle:</span>{" "}
          {spell.fizzle}
        </p>
        <p className="">
          <span className="font-semibold">Weak:</span>{" "}
          {spell.weak}
        </p>
        <p className="">
          <span className="font-semibold">Adequate:</span>{" "}
          {spell.adequate}
        </p>
        <p className="">
          <span className="font-semibold">Exemplary:</span>{" "}
          {spell.exemplary}
        </p>
      </div>
    </div>
  </div>

  )
}