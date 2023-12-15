
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SessionSales (){

    const symbol = " > "
    const{t  } = useTranslation();
            return(
            <div className="SessionName" style={{backgroundColor:"#eee" ,textAlign:"right"  ,marginTop:120  ,  width:"100%" , padding:"20px" }}>
             <div style={{display:"flex"}}>
            <Link to='/main'>{ t("main") }</Link>
            <Link> { symbol } { t("lists-2") }</Link>
                  
            </div>
            </div>
            )

}


export default SessionSales;