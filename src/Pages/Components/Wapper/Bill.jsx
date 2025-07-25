import img1 from "../../../Pages/img/svgexport-16 (1).svg";
import img2 from "../../../Pages/img/svgexport-8 (1).svg";
import { bill } from "../../data/data.jsx";

function Bill() {
  return (
    <>
      <div className="w-full">
        <h1 className="text-center text-lg font-bold text-gray-700 my-3">
          صورت حساب
        </h1>

        <div className="flex flex-wrap justify-between  items-center gap-2 my-3">
          <p className="text-gray-600 text-[13px]">نحوه خرید</p>
          <img src={img2} alt="icon" className="w-[20px] h-[20px]" />
        </div>

        <hr />

        {bill &&
          bill.map((elem, index) => {
            const isLast = index === bill.length - 1;

            return (
              <div key={index}>
                <div className="flex flex-wrap justify-between  items-center gap-4 p-3">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`text-[13.5px] ${
                        isLast ? "text-red-600" : ""
                      }`}
                    >
                      {elem.item}
                    </div>
                    {index === 0 && <p className="text-orange-600">(3 کالا)</p>}
                  </div>

                  <div
                    className={`text-[13.5px] ${isLast ? "text-red-600" : ""}`}
                  >
                    <div className="flex items-center gap-1">
                      <p>{Number(elem.price).toLocaleString("fa-IR")}</p>
                      <img
                        src={img1}
                        alt="icon"
                        className="w-[20px] h-[20px]"
                      />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Bill;
