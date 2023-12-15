import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import "./onePage.css"
import { decrement, increment } from "../../app/features/Counter-Slice";
import { useDispatch, useSelector } from "react-redux";
function BuyNow (){
    const{t , i18n} = useTranslation();
    const {productID} = useParams();
    const [product , setProducts] = useState([]);
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);
    useEffect(()=>{
        fetch(`http://localhost:5000/courses/${productID}`)
        .then(res => res.json())
        .then((product)=>{setProducts(product)})
       
    } , []);
    return(
        <>
        <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center" , boxShadow:"0px 0px 0px 5px #eeeeee75" , height:"100px" , position:"fixed" , bottom:0 , width:"100%" , zIndex:10 , backgroundColor:"white"}}>
         <div className="priceCon" style={{display:"flex"}}>
         <img className="imgPage" src={product.photo} style={{width:"70px" , height:"70px"}} />
         <div>
         <SessAr />
        <div className=' w-full flex justify-start' style={{paddingRight:20 , marginBottom:10}} >
        <p  className=" buyName h-2 mb-2  font-bold font-main-font text-[20px] px-2  ">
        {product.price * count}{" "}{t("sort")}
        </p>
        <p  className=" buyName h-4 mb-2 font-main-font text-[14px]  px-2 " style={{color: 'rgb(247, 169, 182)',textDecoration:' line-through' , position:"relative" , top:6}}>
        {product.priceOld * count}{" "}{t("sort")}
    </p>
     </div>
         </div>
         </div>
         <div className="buynow" style={{display:"flex"}}>
         <div className="concount" style={{  marginRight:20, border: "1px solid #c1c1c1",padding: "0 7px",borderRadius:" 6px"}}>
        <button className="btnplus"  style={{ paddingLeft: "20px",color:" #999",fontSize: "30px"}} onClick={()=> dispatch(increment(1))}> + </button>
        <span className=" btnplus" style={{color:"#333" , fontSize:20}}>{count >= 1 ? count : 1}</span>
       <button className="btnplus"  style={{ paddingRight: "20px",color:" #999",fontSize: "30px"}} onClick={()=> dispatch(decrement(1))}>-</button>
        </div>
    <button style={{marginLeft:20 , marginRight:20 ,marginLeft: "20px",
    border: "1px solid #451256",
    borderRadius: "6px",
    padding: "5px 10px",
    color:"#451256"}}>
                <ShoppingCartOutlined />{t("buy")}
            </button>
         <AddToItem />
         </div>
        </div>
        </>
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
        <h2 className="buyPrice" style={{textAlign:"right" , paddingRight:"20px" , fontWeight:"bold" , fontSize:"25px"}}>{product.category}</h2>
     )
    } else{
        return(
            <h2 className="buyPrice" style={{textAlign:"right" , paddingRight:"20px" , fontWeight:"bold" , fontSize:"25px"}}>{product.category_ar}</h2>
         )
    }
  }

  const AddToItem = ()=>{
    const{t} = useTranslation();
    const wishes = ()=>{
        const seles = document.querySelectorAll(".btnwatches");
         seles.forEach((sele)=>{
            sele.addEventListener("click" , ()=>{
                sele.classList.toggle("active")
            })
         })
     }

    return(
        <button onClick={()=>{wishes()}} style={{background:"#451256" , padding:"5px" , marginLeft:"15px"}} className=" btnwatches flex justify-center items-center text-[12px]  text-white rounded-md">
        <HeartOutlined  style={{marginLeft:5}} /> {t("wishes")}
        </button>
    )
}
export default BuyNow;