import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Request_Com from "./Request_Com";
import Session_Request from "./Session_Request";

function Component_Request (){
    return(
     <>
     <NaveBAr />
     <Translate />
     <Session_Request />
     <Request_Com />
     <AppFooter />
     </>
    )
}
export default Component_Request;