import { UpSquareOutlined } from "@ant-design/icons";
import Nonotification from "../Notifications/Nonotification";
import { useTranslation } from "react-i18next";

function Order_Com (){
    const {t} = useTranslation();
    return(
        <div className="container">
        <div className="request_content" style={{display:"flex" , alignItems:"center" }}>
            <Nonotification />
            <div className="text-con" style={{display:"flex" , marginRight:50 , alignItems:"center"}}>
                <div style={{backgroundColor:"#eee" , padding:20 , borderRadius:"40px" , }}>
                <UpSquareOutlined className='notIcon' style={{fontSize:40}} />
                </div>
                <p style={{marginRight:10}}>{t("norequest")}</p>
            </div>
        </div>
      </div>
    )
}
export default Order_Com;