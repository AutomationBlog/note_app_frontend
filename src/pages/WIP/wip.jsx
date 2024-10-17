import wip from "../../assets/WIP.jpg";
export default function WIP() {
  return (
    <div className="min-h-screen container mx-auto my-10 h-auto w-auto">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-2 font-bold">Notes App</h1>
        <img src={wip} className="w-1/2 h-1/2" />
      </div>
    </div>
  );
}
