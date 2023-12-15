import { Button } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsBagCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addToCart } from "../../app/features/CartSlice";
import { useDispatch } from "react-redux";
import { AddToCart } from "../API";

function AmireYou (){
    const [products , setProducts] = useState([]);
    const{ i18n} = useTranslation();
    const {t} = useTranslation();
    useEffect(()=>{
        fetch("http://localhost:5000/services")
            .then((res)=> res.json() )
            .then((product)=>{
                setProducts(product)});   
          } , {})
    
    return(
        
products.map((product) =>{
        if(i18n.language === "en"){
        return(         
            <div style={{width:'200px'}} className="Card md:w-60 w-full h-[360px]  flex flex-col  rounded-md mr-2 lg:mb-2 mb-2 ml-2">
            <div className="cardPhoto w-full h-[50%] rounded-md">
               
                <img
                className="cardImg w-full h-full rounded-md"
                src={product.photo}
                alt="cardPhoto"
              />
               
            </div>
            <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[13px] text-purple-700 px-2 mt-5 ">
              {product.category}
            </p>
            <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[12px] text-gray-500 px-2 mt-3 ">
            {product.name}
            </p>
            <div className=' w-full flex justify-start' >
             <p  className="h-6 mb-2  font-bold font-main-font text-[14px] text-purple-700 px-2 mt-2 ">
              {product.price}{" "}{t("sort")}
            </p>
            <p  className=" h-6 mb-2 font-main-font text-[14px] text-purple-700 px-2 mt-2" style={{color: 'rgb(247, 169, 182)',textDecoration:' line-through'}}>
              {product.priceOld}{" "}{t("sort")}
            </p>
             </div>
            <div className="Btns w-full h-8 flex justify-center items-center px-2 mb-2">
            <AddToCartButton item={product} />
            
            </div>
          </div>
        )
             }else{
                return (
                 
                  <div style={{width:'200px'}} className="Card md:w-60 w-full h-[360px]  flex flex-col  rounded-md mr-2 lg:mb-2 mb-2 ml-2">
                  <div className="cardPhoto w-full h-[50%] rounded-md">
                    <img
                      className="cardImg w-full h-full rounded-md"
                      src={product.photo}
                      alt="cardPhoto"
                    />
                  </div>
                  <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[13px] text-purple-700 px-2 mt-5 ">
                    {product.category_ar}
                  </p>
                  <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[12px] text-gray-500 px-2 mt-3 ">
                  {product.name_ar}
                  </p>
                  <div className=' w-full flex justify-start' >
                   <p  className="h-6 mb-2  font-bold font-main-font text-[14px] text-purple-700 px-2 mt-2 ">
                    {product.price_ar}{" "}{t("sort")}
                  </p>
                  <p  className=" h-6 mb-2 font-main-font text-[14px] text-purple-700 px-2 mt-2" style={{color: 'rgb(247, 169, 182)',textDecoration:' line-through'}}>
                    {product.priceOld_ar}{" "}{t("sort")}
                  </p>
                   </div>
                  <div className="Btns w-full h-8 flex justify-center items-center px-2 mb-2">
                  <AddToCartButton item={product} />
   
                  </div>
                </div>
                
                );
              }
            })

        )
     }

function AddToCartButton ({item}){
    const{t} = useTranslation();
      const dispatch = useDispatch();
      
       const [loading , setLading] = useState(false);
  
        const  AddCartMessage = () => {
          
          setLading(true);
          AddToCart(item.id).then(res =>{  
           dispatch(addToCart(item));
           setLading(false);
          });  
       } 
       
       return(
          <Button loading={loading} onClick={()=>{AddCartMessage()}} style={{transition:'0.5s'  , position:"relative" , zIndex:1}} className=" btnItem w-[70%] h-full flex justify-center items-center text-[12px] bg-orange-600 hover:bg-orange-400 text-white rounded-md">
            <BsBagCheck className="ml-2" /> {t("addCart")}
          </Button>
       )
   }
export default AmireYou;