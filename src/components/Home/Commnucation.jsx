import { WhatsAppOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { BsWhatsapp } from "react-icons/bs";
import './AppFooter.css'

function Commnucation (){
    return(
        <>
          <a target="_blank" href="https://api.whatsapp.com/send?phone=966537707887&text=">
          <FloatButton style={{backgroundColor:"greenyellow" ,right:30}} icon={<BsWhatsapp />}/>
          </a>
        </>
    )
}
export default Commnucation;