import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import img1 from '../../assets/img4.png';
import img2 from '../../assets/img3.jpg';
import img3 from '../../assets/za-deg.png';
import { Card, Rate, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { CommentOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import pay1 from '../../assets/apple_pay.webp';
import pay2 from '../../assets/mada.webp';
import pay3 from '../../assets/mastercard.webp';
import pay4 from '../../assets/paypal.webp';
import pay5 from '../../assets/stc_pay.webp';
import pay6 from '../../assets/tabby_installment.webp';
import pay7 from '../../assets/tamara_installment.webp';
import pay8 from '../../assets/visa.webp';
function Special_OnePge(){
  const{t , i18n} = useTranslation();
    const {serveiceId} = useParams();
    const [product , setProducts] = useState([]);
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${serveiceId}`)
        .then(res => res.json())
        .then((product)=>{setProducts(product)})
       
    } , []);
    const space = "   ";
  
  return(
    <div className="contain" style={{marginTop:"30px"}}>
    <div className="onePage" style={{display:"flex" , width:"100%" }}> 
    <Swiper className="swiper"
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={product.photo} style={{width:"100%" , height:'100%' , borderRadius:"6px"}} /></SwiperSlide>
      <SwiperSlide><img src={img1} style={{width:"100%" , height:'100%' , borderRadius:"6px"}} /></SwiperSlide>
      <SwiperSlide><img src={img2} style={{width:"100%" , height:'100%' , borderRadius:"6px"}} /></SwiperSlide>
    </Swiper>
    <div className="conPage" style={{width:"65%"}}>
      <div style={{marginRight:"20px" , border:"1px solid #cdcdcd", padding:10 , borderRadius:6 }}>
        <div style={{display:"flex"}}>
          <img className="imgPage" src={img3} style={{width:"70px" , height:"70px"}} />
          <div style={{display:"flex" , flexDirection:"column" , marginRight:25 , alignItems:"flex-start"}}>
          <Typography.Text style={{color:"green" , fontWeight:"bold" , marginBottom:10 , fontSize:20  }}>أصلي 100%</Typography.Text>
          <Typography.Text> 
          {t("clickHere")} {space}  
          <Link to='zaya' >{t("digital")} </Link>
        </Typography.Text>
        </div>
        
        </div>
        
      </div>
      <SessAr />
      <div style={{textAlign: "right",paddingRight: "20px" , display:"flex"}}>
      <Rate defaultValue={5} disabled tooltips={[t("ratings") , t("ratings") , t("ratings") , t("ratings") , t("ratings")]}  />
        <p style={{paddingRight:10 , position:"relative" , top:5}}>5{" "}{t("reviews")}</p>

      </div>
      <Card style={{border:"none" , textAlign:"right"}}>
        <Card.Meta description={<Typography.Paragraph ellipsis={{rows:1 , symbol:"more" , expandable:true}}>{t("offer")}</Typography.Paragraph>}>
          
        </Card.Meta>
      </Card>

      <div className=' pricePage w-full flex justify-start' >
     <p className=" h-2 mb-2  font-bold font-main-font text-[20px] px-2 mt-2 ">
      {product.price * count}{" "}{t("sort")}
    </p>
    <p className=" h-4 mb-2 font-main-font text-[14px]  px-2 mt-2" style={{color: 'rgb(247, 169, 182)',textDecoration:' line-through' , position:"relative" , top:6}}>
      {product.priceOld * count }{" "}{t("sort")}
    </p>
     </div>

    <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
       <img src={pay1} style={{width:50 , height:30 , marginLeft:10 }} />
       <img src={pay2} style={{width:50 , height:30, marginLeft:10 }} />
       <img src={pay3} style={{width:50 , height:30, marginLeft:10 }} />
       <img src={pay4} style={{width:50 , height:30, marginLeft:10}} />
       <img src={pay5} style={{width:50 , height:30, marginLeft:10}} />
       <img src={pay6} style={{width:50 , height:30, marginLeft:10}} />
       <img src={pay7} style={{width:50 , height:30, marginLeft:10}} />
       <img src={pay8} style={{width:50 , height:30, marginLeft:10}} />
    </div>
    </div>

     </div>

     </div>
  )
}

const SessAr = ()=>{
  const{t , i18n} = useTranslation();
  const {productId} = useParams();
  const [product , setProducts] = useState([]);
  useEffect(()=>{
      fetch(`http://localhost:5000/services/${productId}`)
      .then(res => res.json())
      .then((product)=>{setProducts(product)})
  } , [])
  if(i18n.language == 'en'){
   return(
      <h2 style={{textAlign:"right" , padding:"20px" , fontWeight:"bold" , fontSize:"25px"}}>{product.category}</h2>
   )
  } else{
      return(
          <h2 style={{textAlign:"right" , padding:"20px" , fontWeight:"bold" , fontSize:"25px"}}>{product.category_ar}</h2>
       )
  }
}


export default Special_OnePge;