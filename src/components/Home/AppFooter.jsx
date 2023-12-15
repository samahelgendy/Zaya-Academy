import { UpCircleFilled } from "@ant-design/icons";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";
import './AppFooter.css';
import { useEffect } from "react";
import ZayaImg from '../../assets/zayaImg.png'
import { BsWhatsapp } from "react-icons/bs";
import dif from '../../assets/dif.webp';
import pay1 from '../../assets/apple_pay.webp';
import pay2 from '../../assets/mada.webp';
import pay3 from '../../assets/mastercard.webp';
import pay4 from '../../assets/paypal.webp';
import pay5 from '../../assets/stc_pay.webp';
import pay6 from '../../assets/tabby_installment.webp';
import pay7 from '../../assets/tamara_installment.webp';
import pay8 from '../../assets/visa.webp';
import { Link } from "react-router-dom";
function AppFooter (){

    useEffect(() =>{
    
      
        const backtoTop = document.querySelector(".backtoTop");
        backtoTop.addEventListener('click' , ()=>{
            window.scrollTo({
                left:0,
                top:0,
                behavior:"smooth"
            })
        })
    } , [])
    const {t} = useTranslation();
    return(
        <div className="footTop" style={{paddingTop:80}}>
        <div className="container">
             
             <div className="backtoTop" style={{cursor:"pointer" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
             <Typography.Paragraph style={{fontSize:18}}>{t("backTo")}</Typography.Paragraph>
              <UpCircleFilled className="up" style={{fontSize:18 , marginRight:15 , position:"relative" , top:-10  }} />
             </div>
             <div className="confooter" style={{display:"flex" , justifyContent:"space-between" , flexWrap:"wrap" , marginBottom:30}}>
             <div className="textcon">
             <h4>{t("firstknow")}</h4>
                <Typography.Paragraph>{t("subscribe")}</Typography.Paragraph>
             </div>
             <div>
             <input className="inputemail" style={{border:"1px solid #3f0153" , color:"#3f0153" , padding :"5px 15px" }} placeholder={t("enterEmail")}/>
                <button className="btnemail" style={{backgroundColor:"#3f0153" , color:"white" , padding :"5px 15px" , cursor:"pointer" }}>{t("Subscribe")}</button>
                
             </div>
             </div>
             <hr  />

             <div className="footLogo" style={{display:"flex" , justifyContent:"space-between" , marginBottom:30}}>
              <div className="footImg_1" style={{width:"30%" }}>
                   <img src={ZayaImg} style={{width:150 , height:100 , margin:"auto" }} />
                   <Typography.Paragraph>{t("professionalTeam")}</Typography.Paragraph>
              </div>
              <div className="footImg_2" style={{width:"25%"  , marginTop:25}}>
                   <h2 style={{fontWeight:"bold" , marginBottom:13 , fontSize:20}}>{t("interestYou")}</h2>
                   <div style={{ display:"flex" , flexDirection:"column"}}>
                   <Link to="/policy" ><span >{t("privacy")}</span></Link>
                   <Link to="/exchange"><span>{t("exchange")}</span></Link>
                   <Link to="/main"><span>{t("Academy")}</span></Link>
                   <Link to="/blog"><span>{t("recruitment")}</span></Link>
                   </div>
              </div>
              <div className="footImg_3" style={{width:"25%"  , marginTop:25 , display:"flex" , flexDirection:"column", alignItems:"center"}}>
                   <h2 style={{fontWeight:"bold" , marginBottom:13 , fontSize:20}}>{t("customerservice")}</h2>
                   <a style={{background:"#eee" , padding:"17px 40px" , borderRadius:6}} href="tel:01097226321" target="_blank"><BsWhatsapp style={{color:"#3f0153"}} /></a>

              </div>
             </div>
             <hr />

        </div>
         <div className="Footer" >
            <div className="footer-2" style={{display:"flex" , justifyContent:"space-between"}}>
            <div  style={{display:"flex" , alignItems:"center" , marginBottom:30 }}>
            <img src={dif} style={{width:"50px"}} />
            <Typography.Text style={{color:"#777"}}>{t("verified")}</Typography.Text>
            </div>
             <div style={{display:"flex" , flexWrap:"wrap" , marginBottom:30}}>
               <img src={pay1} style={{width:50 , height:30 , marginLeft:10  }} />
               <img src={pay2} style={{width:50 , height:30, marginLeft:10 }} />
               <img src={pay3} style={{width:50 , height:30, marginLeft:10 }} />
               <img src={pay4} style={{width:50 , height:30, marginLeft:10}} />
               <img src={pay5} style={{width:50 , height:30, marginLeft:10}} />
               <img src={pay6} style={{width:50 , height:30, marginLeft:10}} />
               <img src={pay7} style={{width:50 , height:30, marginLeft:10}} />
               <img src={pay8} style={{width:50 , height:30, marginLeft:10}} />
                     </div>
                     <div style={{ marginBottom:30}}>
                        <p style={{color:"#777"}}>{t("reserved")}</p>
                     </div>
                     </div>
         </div>
        </div>
    )
}
export default AppFooter;