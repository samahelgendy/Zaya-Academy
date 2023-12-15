import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Component_Wishes from "./Component_Wishes";
import Session_Wishes from "./Session_Wishes";

function Wishes_Component (){
    return(
        <>
        <NaveBAr />
        <Translate />
        <Session_Wishes />
        <Component_Wishes />
        <AppFooter />
        </>
    )
}
export default Wishes_Component;