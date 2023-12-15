import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import AmireYou from "./AmireYou";
import BuyNow from "./BuyNow";
import Feature_Product from "./Feature_Product";
import SessionName from "./SessionName";
import OnePage from "./onePage";

function ContentPage (){
    return(
        <>
        <NaveBAr />
        <Translate />
        <SessionName />
        <OnePage />
        <Feature_Product />
        <BuyNow />
        <AppFooter />
       
        </>
    )
}
export default ContentPage;