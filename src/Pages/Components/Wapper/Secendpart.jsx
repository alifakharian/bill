import AutorenewIcon from "@mui/icons-material/Autorenew";
import { products } from "../../data/data.jsx";

function Secendpart() {
  return (
    <div
      className="p-3 border-2 border-gray-400 rounded-xl lg:mx-3 bg-gray-200"
      dir="rtl"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
          <p className="font-bold">ارسال سریع‌تر</p>
          <p className="text-gray-600 text-[13px] max-w-[500px]">
            در این روش کالاها توسط اکسپرس سریع‌تر از حالت عادی تحویل شما داده
            می‌شود.
          </p>
        </div>

        <button className="border-2 text-[10px] hidden lg:flex smd:w-[150px]  border-fuchsia-800 px-3 py-1 rounded-lg text-fuchsia-800  items-center justify-center gap-1 whitespace-nowrap">
          ارسال با زیترو اکسپرس
          <AutorenewIcon className="text-fuchsia-800" fontSize="small" />
        </button>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-wrap gap-3 justify-start">
          {products &&
            products.map((elem, index) => (
              <img
                key={index}
                className="w-[70px] h-[70px] rounded-full object-cover"
                src={elem.img}
                alt={`product-${index}`}
              />
            ))}
        </div>
        <button className="border-2 h-[40px] mt-3 text-[10px] flex lg:hidden smd:w-[150px]  border-fuchsia-800 px-3 py-1 rounded-lg text-fuchsia-800  items-center justify-center gap-1 whitespace-nowrap">
          ارسال با زیترو اکسپرس
          <AutorenewIcon className="text-fuchsia-800" fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default Secendpart;
