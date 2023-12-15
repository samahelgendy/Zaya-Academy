import { ArrowRightOutlined, BellOutlined, ShoppingCartOutlined, ShoppingOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Nonotification (){
    const {t} = useTranslation();
    return( 
        <div className="notificat" style={{backgroundColor:"#eeeeee4c" , borderRadius:4 , marginTop:50 , width:270 , height:270 , boxShadow:"2px 2px 2px 2px #eeeeee4c" }}>
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
          
          <Link >
          <li className="listStyle listLast">
            <ArrowRightOutlined className='notIconlast' />
            {t("sign out")}
          </li>
          </Link>
        </ul>
     </div>
    )
}
export default Nonotification;