import Translate from "../../Translate";
import NaveBAr from "../Home/Navbar";
import SessionPrivacy from "./SessionPrivacy";
import PrivacyData from "./PrivacyData";
import Commonquestion from "./CommonQuestion";
import AppFooter from "../Home/AppFooter";
import SpecialQuestion from "./SpecialQuestion";
function Component_Privacy(){
    return(
        <>
        <NaveBAr />
        <Translate />
         <SessionPrivacy />
         <PrivacyData />
         <Commonquestion />
         <SpecialQuestion />
         <AppFooter />
        </>
    )
}
export default Component_Privacy;