import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Order_Com from "./Order_Com";
import Session_Order from "./Session_Order";

function Component_Order (){
    return(
        <>
        <NaveBAr />
        <Translate />
        <Session_Order />
        <Order_Com />
        <AppFooter />
        
        </>
    )
}
export default Component_Order;