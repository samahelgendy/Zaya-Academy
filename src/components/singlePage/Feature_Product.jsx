import { useTranslation } from "react-i18next";
import AmireYou from "./AmireYou";

function Feature_Product(){
  const {t} = useTranslation();
    return(
    <>
      <h4 className="w-full h-10 mb-8 mt-8 flex justify-center items-center text-purple-950 font-main-font text-xl font-bold ">
        {t("amire")}
      </h4>
        <div style={{marginBottom:50}} className="w-full h-auto overflow-hidden lg:px-12 xs:px-4 flex  justify-center items-center flex-wrap ">
        <AmireYou />
        </div>
    </>
    )
}
export default Feature_Product;