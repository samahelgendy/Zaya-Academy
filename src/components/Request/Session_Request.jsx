import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import userImg from '../../assets/avatar_male.webp'
function Session_Request (){
    const symbol = " > ";
    const {t} = useTranslation();
    return(
       <div>

         <div className="SessionName" style={{backgroundColor:"#eee" , display:"flex" ,  alignItems:"center" ,textAlign:"right"  ,marginTop:120  ,  width:"100%" , padding:"20px" }}>
         <div style={{width:50 , height:50 , marginRight:10  }}>
            <img src={userImg} style={{width:"100%" , height:"100%" , borderRadius:"50%", }} />
        </div>
        <div style={{marginRight:10}}>
            <div style={{display:"flex" , alignItems:"center"  }}>
            <h1 style={{fontSize:20 , marginBottom:10 , fontWeight:"bold"}}>{ t("Requests") }</h1>
            <span style={{marginRight:10}}>({t("norequest")})</span>
            </div>
         <div style={{display:"flex"}}>
        <Link to='/main'>{ t("main") }</Link>
        <Link> { symbol } { t("Requests") }</Link>
              
        </div>
        </div>
        </div>
       </div>
        )
}
    
export default Session_Request;