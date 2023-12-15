import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Account_com from "./Account_com";
import Session_Account from "./Session_Account";

function Component_Account (){
    return(
        <>
         <NaveBAr />
        <Translate />
        <Session_Account />
        <Account_com />
        <AppFooter />
        </>
    )
}
export default Component_Account;