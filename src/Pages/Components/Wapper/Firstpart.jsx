import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddLocationIcon from "@mui/icons-material/AddLocation";

export default function Firstpart() {
  return (
    <>
      <div
        dir="rtl"
        className="p-3 text-gray-600 border-2 lg:mx-3 shadow-sm border-gray-200 rounded-xl"
      >
        <div className="flex flex-wrap gap-y-3  justify-between">
          <div className="flex gap-[100px]">
            <p className="text-black font-bold">زمان و نحوه تحویل</p>
            <p className="text-[12px]">2 مرسوله</p>
          </div>
          <button className="border-2 text-[11px] border-blue-500 p-1 rounded-lg text-blue-500">
            <ChevronRightIcon />
            بازگشت به سبد خرید
          </button>
        </div>
        <div className="text-[12px] py-2">شیوه دریافت</div>
        <div className="flex my-[50px]  justify-center align-items-center flex-row-reverse gap-3">
          <p className="mt-2 text-[13px]">دریافت از فروشگاه تهران</p>
          <button className="border-2 border-blue-400 p-1 rounded-xl text-blue-400 bg-blue-50">
            تحویل به آدرس شما
          </button>
        </div>
        <div className="flex flex-col gap-y-3 bg-orange-100 border-2  border-orange-500 p-2 rounded-xl">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <CheckCircleIcon className="text-orange-600" />
              <div className="text-orange-600 text-[12px]">
                ارسال به(عنوان آدرس)
              </div>
            </div>
            <AddLocationIcon className="text-orange-600" />
          </div>
          <div className="flex gap-3">
            <PersonIcon />
            <div className="text-[12px] mt-1">محمدرضااکبری</div>
          </div>
          <div className="flex gap-3">
            <PersonIcon />
            <p className="text-[12px] mt-1">
              تهران , تهران جمال زاده خیابان آزادی،نرسیده به خیابان فریب، خیابان
              والعصر ،کوچه بزمه / پلاک 434 / واحد 4
            </p>
          </div>
        </div>
      </div>
      <div
        className="block sm:hidden bg-red-200 text-red-500 border-2 border-red-500 outline-none mx-3 p-2 rounded-lg text-[13px] leading-[30px]"
        dir="rtl"
      >
        این سفارش در چند نوبت(مرسوله) ارسال می شود . چون شامل کالای سنگین یا روش
        ارسال متفاوت است.
      </div>
    </>
  );
}
