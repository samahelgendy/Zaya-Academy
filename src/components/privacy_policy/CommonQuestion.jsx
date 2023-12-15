import { useTranslation } from "react-i18next";

function Commonquestion (){
    const {t} = useTranslation();
    return(
            <div>
            <textarea  style={{backgroundColor:"#eeeeee71" , width:"90%" , marginTop:20 , height:"100px" , padding:"10px" , color:"black" , outline:"none" , borderRadius:"6px" , transition: "0.5s"}} placeholder={t("question")} />
           <button style={{backgroundColor:"#3f0153" , color:"white" , padding :"8px 50px" , cursor:"pointer" , borderRadius:"6px" , margin:"30px 0"}}>{t("send")}</button>
            </div>

    )
}
export default Commonquestion;