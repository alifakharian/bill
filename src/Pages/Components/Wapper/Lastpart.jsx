import NewReleasesIcon from "@mui/icons-material/NewReleases";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import img1 from "../../../Pages/img/svgexport-16 (1).svg";

function Lastpart() {
  return (
    <>
      <div className="flex flex-wrap justify-between mt-[55px] pb-6  mb-3 gap-2">
        <input
          placeholder="کد تخفیف"
          type="text"
          className="bg-gray-100 w-full  sm:w-[75%] h-[40px] rounded-lg p-3 outline-none border-2 border-gray-300"
        />
        <div className="sm:w-[20%]">
          <button className="border-2 text-[12px] border-gray-600 text-gray-600 px-4 py-2 rounded-lg">
            ثبت کد
          </button>
        </div>
      </div>

      <div className="flex gap-2 bg-blue-100 p-2 my-[40px] text-blue-500 rounded-lg">
        <NewReleasesIcon className="mt-1" />
        <div className="text-[11px] leading-[23px]">
          هزینه ارسال در ادامه با مشخص کردن آدرس، زمان و نحوه ارسال مشخص و به
          هزینه نهایی اضافه خواهد شد
        </div>
      </div>

      <div className="flex flex-col my-2 justify-start gap-2">
        <div className="flex gap-2 items-start">
          <CheckBoxIcon className="text-orange-600 mt-0.5" />
          <p className="text-gray-700 text-[12px]">صدور فاکتور رسمی</p>
        </div>
        <div className="flex gap-2 items-start">
          <CheckBoxIcon className="text-orange-600 mt-0.5" />
          <p className="text-gray-700 text-[12px]">سفارش بصورت حقوقی ثبت شود</p>
        </div>
      </div>

      <hr />

      <div className="flex  flex-wrap sm:justify-between smd:justify-center items-center gap-4 mt-4">
        <button className="bg-emerald-500 w-full sm:w-auto px-[50px] h-[40px] text-[11px] text-white rounded-lg">
          انتخاب نحوه پرداخت
        </button>

        <div className="flex flex-col">
          <p className="text-[11px]">مبلغ قابل پرداخت</p>
          <div className="flex mt-1 gap-1 items-center">
            <p className="font-black text-[14px]">
              {(60648018).toLocaleString("fa-IR")}
            </p>
            <img src={img1} className="w-[23px] h-[23px]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Lastpart;
