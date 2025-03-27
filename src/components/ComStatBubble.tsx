type props = {stat: string | number, statTag: string}

export default function ComStatBubble({stat, statTag}: props) {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center bg-slate-800 text-white rounded-full w-12 h-12 font-semibold text-lg">{stat}</div>
      <p className="font-semibold">{statTag}</p>
    </div>
  )
}