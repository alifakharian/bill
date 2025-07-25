import { calander } from "../../data/data.jsx";
import Resivetime from "./Resivetime.jsx";

function Calender() {
  return (
    <div dir="rtl" className="w-full h-full p-2">
      <h2 className="mb-[25px]  text-[12px] text-gray-600  mr-4">
        انتخاب تاریخ تحویل
      </h2>
      <div className="flex overflow-x-auto gap-7 px-2 pr-[40px] no-scrollbar scroll-smooth">
        {calander.map((elem, index) => (
          <div
            key={index}
            className={`flex-shrink-0 text-center p-2 min-w-[70px] rounded-xl border-2 ${
              index === 0 ? "border-red-500 text-red-500" : "border-gray-300"
            }`}
          >
            <div>{elem.day}</div>
            <div className="font-black">{elem.number}</div>
            <div>{elem.month}</div>
          </div>
        ))}
      </div>
      <Resivetime />
    </div>
  );
}

export default Calender;
