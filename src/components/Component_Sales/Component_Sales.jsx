import Translate from "../../Translate";
import CustomerOpinions from "../Digital_transformation_services.jsx/CustomerOpinions";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Feature_Product from "../singlePage/Feature_Product";
import SessionSales from "./SessionSales";
import Announcement from "./announcement";

function Component_Sales (){
    return(
        <>
        <NaveBAr />
        <Translate />
        <SessionSales />
        <Announcement />
        <Feature_Product />
        <CustomerOpinions />
        <AppFooter />
        </>
    )
}
export default Component_Sales;