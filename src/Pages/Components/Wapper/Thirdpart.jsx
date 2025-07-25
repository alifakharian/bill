import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Calender from "./Calender";
import Slider from "./Slider";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Thirdpart() {
  return (
    <div
      className="border-2 shadow-sm border-gray-200 rounded-xl w-full"
      dir="rtl"
    >
      {/* Header */}
      <div className="flex flex-wrap  justify-between items-start px-4 mt-3">
        {/* Right section */}
        <div className="flex  items-start gap-2 sm:gap-6">
          <p className="font-black text-gray-600">زیتروپیک</p>

          {/* Hidden below lg */}
          <div className="hidden lg:flex items-center gap-x-3 mt-1">
            <p className="text-gray-500 text-[11px]">ارسال از 1 روز کاری</p>
            <p className="text-gray-500 text-[11px] font-black">4 کالا</p>
          </div>

          <button className="hidden lg:block border-2 text-[11px] border-fuchsia-800 px-3 py-2 rounded-lg text-fuchsia-800 whitespace-nowrap">
            انتخاب نحوه ارسال
          </button>
        </div>

        {/* زمان تحویل - فقط در lg به بالا */}
        <div className="hidden lg:flex items-center gap-5 flex-wrap text-sm">
          <AccessTimeIcon className="text-gray-700" />
          <p className="font-bold text-gray-600">زمان تحویل به شما</p>
          <p className="text-gray-600 text-[12px]">
            تاریخ و ساعت تحویل را مشخص کنید
          </p>
        </div>
      </div>

      {/* Slider & Calender */}
      <div className="flex flex-col lg:flex-row-reverse justify-center mt-6 px-3 gap-4">
        <div className="lg:w-[45%] hidden lg:block">
          <Calender />
        </div>
        <div className="lg:w-[51%]">
          <Slider />
        </div>
        <div className="flex justify-around lg:hidden my-3 px-3 py-2">
          <button className="border-2  border-fuchsia-800 px-3 p-2  rounded-lg text-fuchsia-800 ">
            تغییر نحوه ارسال
          </button>
          <div className="flex justify-center  text-blue-500 gap-1">
            <button className="text-[11px]">توضیحات نحوه ارسال</button>
            <ErrorIcon className="mt-2" />
          </div>
        </div>
        <div className="lg:hidden block">
          <p className="text-right text-gray-600 mr-3">زمان ارسال</p>
          <div className="lg:hidden flex m-2  items-center justify-center gap-x-5">
            <div className="border-2 border-gray-300 rounded-xl p-3 flex flex-col align-items-center justify-center items-start">
              <p className="text-center">سه شنبه</p>
              <p className="text-center font-bold mr-3">24</p>
              <p className="text-center mr-2">اسفند</p>
            </div>
            <div className="flex text-blue-500">
              <CheckCircleIcon />
              <p>10 الی 14</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdpart;
