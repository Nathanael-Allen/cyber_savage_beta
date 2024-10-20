
type TAlertProps = {message: string}

export default function ComAlertBox({message}: TAlertProps) {
  return (
    <div className="bg-gray-200 rounded-md fixed bottom-2 right-6 p-2 transition-all">
      <p className="font-semibold">{message}</p>
    </div>
  )
}