import { useSlidercontext } from "../Context/Slider";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

function Slider() {
  const { items } = useSlidercontext();

  return (
    <div className="" dir="rtl">
      <div className="flex align-items-center overflow-x-auto   pr-1  no-scrollbar scroll-smooth w-full">
        {items.map((item, index) => (
          <>
            <div className="flex justify-start gap-1">
              <div
                key={index}
                className="flex-shrink-0  gap-y-4 flex flex-col items-center  w-[100px]"
              >
                <img
                  src={item.img}
                  className="object-cover rounded-t size-[80px]"
                />

                <div className="mt-1 text-sm">
                  <div className="flex items-center justify-center">
                    {item.color === "سفید" && (
                      <span className="border-2 border-black w-[10px] h-[10px] mt-1 ml-1 rounded-sm"></span>
                    )}
                    {item.color === "مشکی" && (
                      <span className="bg-black w-[10px] h-[10px] mt-1 ml-1 rounded-sm"></span>
                    )}
                    {item.color === "زغالی" && (
                      <span className="bg-[#36454F] w-[10px] h-[10px] mt-1 ml-1 rounded-sm"></span>
                    )}
                    <p className="ml-5">{item.color}</p>
                  </div>
                </div>
                {index % 2 === 0 ? (
                  <div className="lg:flex hidden gap-1 bg-purple-700 w-[120px] p-1 mr-3 my-2 text-white rounded-lg text-xs">
                    <VerifiedUserIcon fontSize="small" />
                    بیمه
                  </div>
                ) : (
                  <div className="my-2 h-6 opacity-0 lg:flex hidden">‌k</div>
                )}
                <div className="flex gap-2 items-center">
                  <button className="w-6 h-6 border-2 border-[#36454F] text-sm rounded-lg flex items-center justify-center">
                    +
                  </button>
                  <span>{item.number}</span>
                  <button className="w-6 h-6 border-2 border-[#36454F] text-sm rounded-lg flex items-center justify-center">
                    -
                  </button>
                </div>
              </div>
              <div className="w-px h-20 bg-gray-300 lg:hidden"></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Slider;
