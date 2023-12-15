import Translate from "../../Translate";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Notif_Component from "./Notif_Component";
import SessionNotific from "./SessionNotif";

function Component_notifications (){
    return(
        <>
        <NaveBAr />
        <Translate />
        <SessionNotific />
        <Notif_Component />
        <AppFooter />
        </>
    )
}
export default Component_notifications;