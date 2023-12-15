import { useEffect, useRef, useState } from 'react'
import { BsBasket, BsBasket3, BsBasket3Fill, BsCart4, BsMusicNoteList, BsPerson, BsPersonBadge, BsPersonBadgeFill, BsPlayBtnFill, BsSignDeadEnd, BsSignDoNotEnterFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import {BsInstagram}from 'react-icons/bs'
import { AiOutlineTwitter } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import logo from '../../assets/logo.webp'
import logo2 from '../../assets/za-deg.png'
import  './navbarStyle.css'
import { Avatar, Badge, Button, Drawer, FloatButton, Input, Menu, Typography } from 'antd'
import { Link , useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { AlertOutlined, ArrowLeftOutlined, ArrowRightOutlined, ArrowsAltOutlined, BellOutlined, CiCircleFilled, CloseCircleOutlined, CloseCircleTwoTone, CloseOutlined, InstagramOutlined, LineChartOutlined, LinkOutlined, MessageOutlined, MinusCircleOutlined, NotificationOutlined, SearchOutlined, ShoppingCartOutlined, ShoppingOutlined, StarOutlined, TwitterOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons';
import user from '../../assets/user.jpg';
import { useTranslation } from 'react-i18next';
import Translate from '../../Translate';


const NaveBAr = () => {
  const {t} = useTranslation();
  const navTopREf = useRef();
  const [showMenu , setShowMenu] = useState(false);
  const [showLink , setShowLink] = useState(false);
  const [showClient , setShowClient] = useState(false);
  
    window.onscroll = () => {
      if(window.scrollY >= 200 ) {
       navTopREf.current.style.position = 'fixed';
       navTopREf.current.style.top = '0';
      } else {
         navTopREf.current.style.position = "relative";
      }
    }

  const UserIcon = () =>{
    const notif = document.querySelector(".notification");
    const userIcon = document.querySelector(".cart-user span");
    notif.classList.toggle("active")
  }
  const cart = useSelector(state => state.cart);
 
   const TotalPrice = cart.reduce((acc , product)=>{
    acc += +product.price ;
    return acc;
} , 0)
  return (
    <>   
     <div className='overlay' >
      <div className='searchCon'>
      <SearchOutlined className='iconSear' />
      <input className='inputsea' placeholder={t("inpSea")} />
      <CloseOutlined className='iconclose' onClick={(e)=>{
        document.querySelector('.overlay').classList.remove('active')
        }}/>
      </div>
    </div>

    <div className="notification" style={{backgroundColor:"#eee" , borderRadius:6 , width:250 , border:"none" , boxShadow:"2px 2px 2px 2px gray" , height:270 , position:"fixed" , left:20 , top:60 , zIndex:10 }}>
      <ul>
      <Link to="/notifications">
        <li className="listStyle" >
          <BellOutlined className='notIcon' />
         {t("Notifications")}
        </li>
        </Link>

        <Link to="/requests">
        <li className="listStyle">
          <ShoppingCartOutlined className='notIcon' />
          {t("Requests")}
        </li>
        </Link>

        <Link to="/awaiting">
        <li className="listStyle">
          <ShoppingOutlined className='notIcon' />
          {t("awaiting")}
        </li>
        </Link>

        <Link to="/wishes">
        <li className="listStyle">
          <StarOutlined className='notIcon' />
          {t("Wishes")}
        </li>
        </Link>

        <Link to="/account">
        <li className="listStyle">
          <UserOutlined className='notIcon' />
          {t("Account")}
        </li>
        </Link>
        
        <Link to='/login'>
        <li className="listStyle listLast">
          <ArrowRightOutlined className='notIconlast' />
          {t("sign out")}
        </li>
        </Link>
      </ul>
   </div>

      <div
        className="topNav  w-full h-[60px] flex justify-between items-center bg-main-purple lg:px-12 xs:px-2 "
        style={{ background: "#9d58b5" }}
        ref={navTopREf}
      >
        <div className="search-icon w-[30%] h-full flex justify-start items-center ">
          <FiMenu onClick={()=>{setShowMenu(true);}}  style={{color:"orange" ,fontSize:25 }} className="ml-4 lg:hidden cursor-pointer  " />
          <BsSearch onClick={()=>{document.querySelector('.overlay').classList.add('active')}} style={{color:"orange" ,fontSize:20 }} className="cursor-pointer " />
        </div>
        <div className="logo w-[30%] h-full flex justify-center items-center ">
          <img className=" h-[80%] " src={logo} alt="logo" />
        </div>
        <div className="cart-user w-[30%] flex justify-end items-center ">
          <span className="ml-4" onClick={UserIcon}>
            {/* <AiOutlineUser className="w-5 h-5" /> */}
            <img src={user} className="w-7 h-7" style={{borderRadius:"50%" , cursor:"pointer"}} />
          </span>
           <Link to='/cart'>
           <Badge style={{cursor:"pointer" , marginRight:"23px"}} count={cart.length} >
           <BsCart4 style={{cursor:'pointer'}} color="orange" className="w-6 h-6 text-white" />
          </Badge>
          </Link>
          <span className="price mr-2" style={{color:"orange"}}>{TotalPrice}ر.س</span>
        </div>
      </div>
      <div className="navLinks w-full h-[60px] flex justify-between items-center px-6 font-bold text-[14px]  ">
        <ul className=" flex w-[60%] h-full  justify-center items-center ">
          <Link to='/Onlinestores'><li>{t("lists-1")}</li></Link>
          <Link to='/sale'><li className="flex items-center mr-4">
            <img src={logo2} alt="زيا الرقمية" className="w-4 h-4 ml-2" />
            {t("lists-2")}
          </li>
          </Link>
          <Link to='/blog'><li className="flex items-center mr-4">
            <img src={logo2} alt="زيا الرقمية" className="w-4 h-4 ml-2" />
            {t("lists-3")}
          </li>
          </Link>
          <Link to='/courses'><li className="mr-4">{t("lists-4")}</li></Link>
          <Link to='/digital'><li className="mr-4">{t("lists-5")}</li></Link>
        </ul>
        <ul className="icon-social  w-40% h-full  flex justify-center items-center">
        
          <li >
            <a target='_blank' href='https://www.instagram.com/zaya_digital/?igshid=YmMyMTA2M2Y%3D'>
            <FloatButton   icon={<InstagramOutlined />} tooltip={t("instagram")} style={{position:'absolute' , backgroundColor:'orange ' , top:'70px' , left:'43px' , zIndex:1}} />
            </a>
          </li>
          <li >
            <a href='https://twitter.com/zaya_digital?s=21&t=MyrhJptw3EAfqOPCBXI9dg' target='_blank'>
             <FloatButton icon={<TwitterOutlined />} tooltip={t('twitter')} style={{position:'absolute' , backgroundColor:'orange', top:'70px' , left:'100px' , zIndex:1}} />
            </a>
          </li>
          <li >
          <a href='https://www.snapchat.com/add/zaya_digital' target='_blank'>
          <FloatButton icon={<BsSnapchat />} tooltip={t('chat')} style={{position:'absolute' , backgroundColor:'orange', top:'70px' , left:'150px' , zIndex:1}} />
          </a>
            </li>
          <li >
            <a href='https://www.tiktok.com/@zaya_digital' target='_blank'>
          <FloatButton icon={<BsTiktok />} tooltip={t('tiktok')} style={{position:'absolute', backgroundColor:'orange', top:'70px' , left:'200px' , zIndex:1}} />
          </a>
          </li>
        </ul>
        
      </div>
    <Drawer style={{direction:"rtl"}} open={showMenu} title={t("mainmenu")} onClose={()=>{setShowMenu(false);}}>

        <ul>
        <Link to="/Onlinestores">
          <li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}}>
          {t("lists-1")}
          </li>
          </Link>
          <Link to='/sale'><li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}} className="flex items-center mr-4">
            <img src={logo2} alt="زيا الرقمية" className="w-4 h-4 ml-2" />
            {t("lists-2")}
          </li>
          </Link>
          <Link to='/blog'><li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}} className="flex items-center mr-4">
            <img src={logo2} alt="زيا الرقمية" className="w-4 h-4 ml-2" />
            {t("lists-3")}
          </li>
          </Link>
          <Link to="/courses">
          <li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}}>
            {t("lists-4")}
          </li>
          </Link>
          <Link to="/digital">
          <li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}}>
            {t("lists-5")}
          </li>
          </Link>
        </ul>
        <div style={{display:"flex" , justifyContent:"space-between" , cursor:"pointer"}} onClick={()=>{{setShowLink(true)}}}>
            
        <Button type='link' icon={<LinkOutlined />} >{t("interest")}</Button>
        <ArrowLeftOutlined/>
        </div>
        <div style={{display:"flex" , justifyContent:"space-between" , cursor:"pointer"}} onClick={()=>{{setShowClient(true)}}}>
        <Button type='link' icon={<BsPerson />} >{t("customers_service")}</Button>
        <ArrowLeftOutlined/>
        </div>
    </Drawer>
    <Drawer style={{direction:"rtl"}} open={showLink} title={t("interest")} onClose={()=>{setShowLink(false);}}>

         <ul>
        <Link to="/policy">
          <li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}}>
          {t("Policy")}
          </li>
          </Link>
          <Link to='/exchange'><li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}} >
            {t("Exchange")}
          </li>
          </Link>
          <Link to="/main">
          <li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}}>
            {t("zaya")}
          </li>
          </Link>
          <Link to="/blog">
          <li style={{margin:"10px 0" , paddingBottom:10 , borderBottom:"1px solid #eee" , fontSize:16 , fontWeight:"bold" , color:"3f0153"}}>
            {t("recruitment")}
          </li>
          </Link>
        </ul>
    </Drawer>

    <Drawer style={{direction:"rtl"}} open={showClient} title={t("customers_service")} onClose={()=>{setShowClient(false);}}>
     <Typography.Link target='_blank' href='https://api.whatsapp.com/send?phone=966537707887&text=' style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
        <WhatsAppOutlined style={{color:"#000" , fontSize:20}} />
        <Typography style={{ fontSize:20}} >{t("app")}</Typography>
     </Typography.Link>
     <Typography.Paragraph style={{margin:'20px 0' , display:"flex" , justifyContent:"center" }}>تابع زايا الرقمية |Zaya Digital</Typography.Paragraph>

     <div style={{margin:'20px 0' , display:"flex" , justifyContent:"center" }}>
      <a target='_blank' href='https://www.instagram.com/zaya_digital/?igshid=YmMyMTA2M2Y%3D'>
     <FloatButton   icon={<InstagramOutlined />} tooltip={t("instagram")} style={{position:'absolute' , backgroundColor:'orange' , top:'200px' , left:'250px' , zIndex:1}} />
     </a>
     <a target='_blank' href='https://twitter.com/zaya_digital?s=21&t=MyrhJptw3EAfqOPCBXI9dg'>
     <FloatButton icon={<TwitterOutlined />} tooltip={t('twitter')} style={{position:'absolute' , backgroundColor:'orange', top:'200px' , left:'200px' , zIndex:1}} />
     </a>
     <a target='_blank' href='https://www.snapchat.com/add/zaya_digital'>
     <FloatButton icon={<BsSnapchat />} tooltip={t('chat')} style={{position:'absolute' , backgroundColor:'orange', top:'200px' , left:'150px'  , zIndex:1}} />
     </a>
     <a target='_blank' href='https://www.tiktok.com/@zaya_digital'>
     <FloatButton icon={<BsTiktok />} tooltip={t('tiktok')} style={{position:'absolute', backgroundColor:'orange', top:'200px' , left:'100px' , zIndex:1}} />
     </a>
     </div>
    </Drawer>
    </>
  );
}


export default NaveBAr;