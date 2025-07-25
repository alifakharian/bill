import Firstpart from "./Firstpart";
import Forthpart from "./Forthpart";
import Secendpart from "./Secendpart";
import Thirdpart from "./Thirdpart";

function Wapper() {
  return (
    <>
      <div className=" mx-auto flex flex-wrap justify-center gap-3 items-stretch flex-row-reverse">
        <div className="w-full lg:w-[60%] gap-3 my-4 flex flex-col">
          <Firstpart />
          <Secendpart />
          <Thirdpart />
        </div>

        <div className="w-full lg:w-[35%]">
          <Forthpart />
        </div>
      </div>
    </>
  );
}

export default Wapper;
