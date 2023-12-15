import { BellOutlined } from "@ant-design/icons";
import Nonotification from "./Nonotification";
import { useTranslation } from "react-i18next";
import './Notif_Component.css'
function Notif_Component (){
    const {t} = useTranslation();
    return(
      <div className="container">
        <div className="notif_content" style={{display:"flex" , alignItems:"center" }}>
            <Nonotification />
            <div className="text-content" style={{display:"flex" , marginRight:50 , alignItems:"center"}}>
                <div style={{backgroundColor:"#eee" , padding:10 , borderRadius:"40px" , }}>
                <BellOutlined className='notIcon' />
                </div>
                <p style={{marginRight:10}}>{t("Nonotifications")}</p>
            </div>
        </div>
      </div>
    )
}
export default Notif_Component;