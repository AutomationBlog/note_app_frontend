import wip from "./assets/WIP.jpg";

function Wip() {
  return (
    <>
      <div className="flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Notes App</h1>
        <div id="portal" className="flex items-center justify-center">
          <img
            src={wip}
            style={{ width: "700px", height: "700px" }}
            alt="WIP"
          />
        </div>
      </div>
    </>
  );
}

export default Wip;
