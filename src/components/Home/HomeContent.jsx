import Translate from "../../Translate";
import CustomerOpinions from "../Digital_transformation_services.jsx/CustomerOpinions";
import AppFooter from "./AppFooter";
import Commnucation from "./Commnucation";
import Featured_products_component from "./Featured_products_component";
import MarketingDigital from "./MarketingDigital";
import NaveBAr from "./Navbar";
import Posters from "./Posters"

function HomeContent (){
    return(
        <div className="homeContent">
      <NaveBAr />
      <Translate />
       <MarketingDigital />
      <Posters />
      <Featured_products_component />
      <CustomerOpinions />
      <AppFooter />
      <Commnucation />
        </div>
    )
}
export default HomeContent;