import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Feature_Product from "../singlePage/Feature_Product";
import SessionName from "../singlePage/SessionName";
import CustomerOpinions from "./CustomerOpinions";


function Component_Digital (){
    return(
        <>
        <NaveBAr />
        <Translate />
        <SessionName />
        <Feature_Product />
        <CustomerOpinions />
        <AppFooter />
        </>
    )
}
export default Component_Digital;