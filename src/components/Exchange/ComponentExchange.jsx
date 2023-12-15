import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Commonquestion from "../privacy_policy/CommonQuestion";
import SpecialQuestion from "../privacy_policy/SpecialQuestion";
import ProductExchange from "./ProductExchange";
import SessionExchange from "./SessionExchange";
function ComponentExchange (){
    return(
        <>
      <NaveBAr />
      <Translate />
      <SessionExchange />
      <ProductExchange />
      <Commonquestion />
         <SpecialQuestion />
         <AppFooter />
      </>
    )
}
export default ComponentExchange;