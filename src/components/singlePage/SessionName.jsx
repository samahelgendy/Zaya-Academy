import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import i18n from "../../i18n";
import './SessionName.css';
function SessionName (){

    const symbol = " > "
    const{t , i18n} = useTranslation();
            return(
            <div className="SessionName" style={{backgroundColor:"#eee" ,textAlign:"right"  ,marginTop:120  ,  width:"100%" , padding:"20px" }}>
             <div style={{display:"flex"}}>
            <Link to='/main'>{ t("main") }</Link>
            <Link> { symbol } { t("lists-1") }</Link>
             
            { symbol } <SessAr />
                    
            </div>
            </div>
            )

}

const SessAr = ()=>{
    const{t , i18n} = useTranslation();
    const {productID} = useParams();
    const [product , setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/courses/${productID}`)
        .then(res => res.json())
        .then((product)=>{setProducts(product)})
    } , [])
    if(i18n.language == 'en'){
     return(
        <Typography.Text>{product.name}</Typography.Text>
     )
    } else{
        return(
            <Typography.Text>{product.name_ar}</Typography.Text>
         )
    }
}
export default SessionName;