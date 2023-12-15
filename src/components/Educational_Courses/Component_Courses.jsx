import Translate from "../../Translate";
import CustomerOpinions from "../Digital_transformation_services.jsx/CustomerOpinions";
import AppFooter from "../Home/AppFooter";
import NaveBAr from "../Home/Navbar";
import Feature_Product from "../singlePage/Feature_Product";
import SessionCourses from "./SessionCourses";


function Component_Courses (){
    return(
        <>
        <NaveBAr />
        <Translate />
        <SessionCourses />
        <Feature_Product />
        <AppFooter />
        </>
    )
}
export default Component_Courses;