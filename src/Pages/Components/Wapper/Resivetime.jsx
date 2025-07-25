import { calander } from "../../data/data.jsx";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

function Resivetime() {
  return (
    <div className="flex-col">
      <h1 className="mt-5 mb-3 mr-3 text-[12px] text-gray-600">
        انتخاب زمان تحویل
      </h1>
      <div className="flex overflow-x-auto gap-[15px]  no-scrollbar scroll-smooth px-1">
        {calander &&
          calander.map((elem, index) => {
            let content;

            if (index === 0) {
              content = (
                <div className="flex items-center w-[90px] text-[10px] justify-center gap-2 p-1 text-blue-600 border-2 rounded-lg border-blue-600">
                  <CheckCircleIcon />
                  <p>{elem.time}</p>
                </div>
              );
            } else if (index === 1) {
              content = (
                <div className="flex items-center w-[120px] justify-center text-[10px] gap-2 p-1 text-rose-600 border-2 rounded-lg border-rose-600">
                  <CancelIcon />
                  <p>{elem.time}</p>
                </div>
              );
            } else if (index === 2) {
              content = (
                <div className="flex items-center justify-center text-[10px] w-[100px] gap-2 p-1 text-black border-2 rounded-lg border-gray-400">
                  <PanoramaFishEyeIcon />
                  <p>{elem.time}</p>
                </div>
              );
            } else if (index === 3) {
              content = (
                <div className="flex items-center text-[10px] w-[100px] justify-start gap-1 p-1 text-gray-600 border-2 rounded-lg border-gray-600">
                  <PanoramaFishEyeIcon />
                  <p>{elem.time}</p>
                </div>
              );
            } else {
              content = (
                <div className="flex items-center justify-start text-gray-600 border-2 rounded-lg border-gray-300">
                  <CheckCircleIcon />
                  <p>{elem.time}</p>
                </div>
              );
            }

            return <div key={index}>{content}</div>;
          })}
      </div>
    </div>
  );
}

export default Resivetime;
