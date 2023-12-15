import { useTranslation } from "react-i18next";

function PrivacyData (){
    const {t} = useTranslation();
    return(
    <div className="container" style={{textAlign:"right" , padding:"0 30px"}}>
    <p style={{marginTop:50}}>{ t("statement") }</p>
    <div>
    <h2 style={{margin:"30px 0" , fontWeight:"bold" , fontSize:20}}>{ t("collect") } :</h2>
    <ul style={{listStyle:"inherit"}}>
        <li >{ t("name") }</li>
        <li>{ t("information") }</li>
        <li>{ t("Demographic") }</li>
        <li>{ t("relevant") }</li>
    </ul>
    </div>

    <div>
    <h2 style={{margin:"30px 0 5px" , fontWeight:"bold" , fontSize:20}}>{ t("HOW TO USE") } </h2>
    <p style={{marginBottom:30}}>{ t("understand") } :</p>
    <ul style={{listStyle:"inherit"}}> 
        <li>{ t("keeping") }</li>
        <li>{ t("We may use") }</li>
        <li>{ t("periodically") }</li>
        <li>{ t("time to time") }</li>
    </ul>
    </div>

    <div style={{margin:"50px 0"}}>
        <h2 style={{fontWeight:"bold" , fontSize:20 , marginBottom:10}}>{t("Information protection")}</h2>
        <p style={{fontWeight:"bold" , fontSize:16}}>{t("committed")}</p>
    </div>

    <div style={{margin:"50px 0"}}>
        <h2 style={{ fontSize:20 , marginBottom:10}}>{t("other sites")}</h2>
        <p style={{ fontSize:16}}>{t("Our website")}</p>
    </div>

    <div style={{margin:"50px 0"}}>
        <h2 style={{fontWeight:"bold" , fontSize:20 , marginBottom:10}}>{t("Sharing")}</h2>
        <p style={{ fontSize:16}}>{t("distribute")}</p>
    </div>
    </div>
    )
}
export default PrivacyData;