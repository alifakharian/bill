import Bill from "./Bill";
import Lastpart from "./Lastpart";

function Forthpart() {
  return (
    <>
      <div
        className="flex flex-col border-2 mt-3 p-5 shadow-sm border-gray-200 rounded-xl justify-items-center flex-wrap"
        dir="rtl"
      >
        <Bill />
        <Lastpart />
      </div>
    </>
  );
}

export default Forthpart;
