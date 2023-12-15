import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Require_Session from "./Require_Session";
import Session_Recruitment from "./Session_Recruitment";
import Commonquestion from "../privacy_policy/CommonQuestion";
import Noquestions from "./Noquestion";
function Components_Recruitment (){
    return(
        <div >
        <NaveBAr />
        <Translate />
        <Session_Recruitment />
        {/* <Require_Session /> */}
        <Commonquestion />
        <Noquestions />
        <AppFooter />
        </div>
    )
}
export default Components_Recruitment;