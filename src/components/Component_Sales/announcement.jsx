import { useTranslation } from "react-i18next";

function Announcement (){
    const {t} = useTranslation();
    return(
        <div style={{margin:"60px 0"}}>
        <h2 style={{color:"rgb(63, 1, 83)" , marginBottom:20 , fontSize:25 , fontWeight:"bold"}}>{t("announcement")}</h2>
        <p style={{color:"#777"}}>{t("discount")}</p>
        </div>
    )
}
export default Announcement;