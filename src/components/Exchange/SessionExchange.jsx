
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function SessionExchange (){

    const symbol = " > "
    const{t} = useTranslation();
            return(
            <div className="SessionName" style={{backgroundColor:"#eee" ,textAlign:"right"  ,marginTop:120  ,  width:"100%" , padding:"20px" }}>
                <h1 style={{fontSize:20 , marginBottom:10 , fontWeight:"bold"}}>{ t("Exchange") }</h1>
             <div style={{display:"flex"}}>
            <Link to='/main'>{ t("main") }</Link>
            <Link> { symbol } { t("Exchange") }</Link>
                  
            </div>
            </div>
            )

}


export default SessionExchange;