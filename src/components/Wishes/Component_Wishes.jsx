import { BellOutlined, UpSquareOutlined } from "@ant-design/icons";
import Nonotification from "../Notifications/Nonotification";
import { useTranslation } from "react-i18next";
import Feature_Product from "../singlePage/Feature_Product";
import { Badge, Button, Card, Image, List, Rate, Typography } from "antd";
import ImgCard from '../../assets/imageCard.jpg';
import { BsBagCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AddToCart } from "../API";
import { addToCart } from "../../app/features/CartSlice";

function Component_Wishes (){
    const {t} = useTranslation();
    const discount = "50%";
    const rating = "3.4";
    return(
        <div className="container">
        <div className="request_content" style={{display:"flex" , alignItems:"center" , justifyContent:"space-between" }}>
            <Nonotification />
      <div style={{ marginTop:50 }}>
     <Badge.Ribbon className="ribbon"  text={`${discount} Off`} color="pink">
     <div style={{width:'300px'}} className="Card md:w-60 w-full h-[360px]  flex flex-col  rounded-md mr-2 lg:mb-2 mb-2 ml-2">
                  <div className="cardPhoto w-full h-[50%] rounded-md">
                    <img
                      className="cardImg w-full h-full rounded-md"
                      src={ImgCard}
                      alt="cardPhoto"
                    />
                  </div>
                  <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[13px] text-purple-700 px-2 mt-5 ">
                    {t("graphic")}
                  </p>

                  <div className=' w-full flex justify-start' >
                   <p  className="h-6 mb-2  font-bold font-main-font text-[14px] text-purple-700 px-2 mt-2 ">
                    {t("Pices")}{" "}{t("sort")}
                  </p>
                  <p  className=" h-6 mb-2 font-main-font text-[14px] text-purple-700 px-2 mt-2" style={{color: 'rgb(247, 169, 182)',textDecoration:' line-through'}}>
                    {t("Prices_old")}{" "}{t("sort")}
                  </p>
                   </div>
                    
                </div>
     </Badge.Ribbon>
     </div>
        </div>
      </div>
    )
}

export default Component_Wishes;