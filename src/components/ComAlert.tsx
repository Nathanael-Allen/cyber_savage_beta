type props = { message: string };

export default function ComAlert({ message }: props) {
  return (
    <div className="fixed w-3/4 bottom-3 left-0 right-0 m-auto text-center">
      <div className="border border-black rounded-md font-semibold bg-gray-200 p-2 ">
        <p>{message}</p>
      </div>
    </div>
  );
}
