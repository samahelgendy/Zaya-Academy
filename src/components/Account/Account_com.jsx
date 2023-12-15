import { useTranslation } from "react-i18next";
import Nonotification from "../Notifications/Nonotification";
import { Form } from "react-router-dom";
import { Button, Input } from "antd";
import { useState } from "react";
import './Account.css'
function Account_com (){
    const {t} = useTranslation();
    const msgName = t("mesname");
    const msgPass = t("msgPass");
    const msgPassconfirm = t("confirmcopy");
    const Passconfirm = t("msgConfirm");

    return(
        <div className="container">
        <div className="request_content" style={{display:"flex" , alignItems:"center" }}>
            <Nonotification />
            <div className="dataInfo"  style={{marginRight:50}}>
               <div style={{display:"flex" ,  marginBottom:10}}>
               <label style={{width:150}}>{t("userName")}</label>
                <Input placeholder={t("nameHolder")} value={t("clientName-1")} style={{border:"none"}} />
               </div>
               <div style={{display:"flex" , marginBottom:10}}>
               <label style={{width:150}}>{t("E-mail")}</label>
                <Input placeholder={t("E-mail")} value="samahelgend99@gmail.com" style={{border:"none"}} />
               </div>
               <div style={{display:"flex" , marginBottom:10}}>
               <label style={{width:200}}>{t("Mobile number")}</label>
                <Input placeholder={t("Mobile number")} value="+0297226321" style={{border:"none"}} />
               </div>
               <button className="btnSave" style={{transition:"0.5s", marginTop:25,backgroundColor:" #3f0153" , color:"white" , width:"100%" , padding:"7px 0" , borderRadius:"6px"}}>{t("save")}</button>
            </div>
        </div>
      </div>
    )
}
export default Account_com;