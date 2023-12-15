import { CloseCircleFilled, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { BsFillPassFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NoData (){
    return(
      <div >
      <div style={{display:"flex" , justifyContent:"center" , position:"relative" , top:"100px" , paddingBottom:"100px" }}>
        <LockOutlined style={{fontSize: "40px",color: "gray",background: "#eee",padding: "30px",borderRadius: "50%",}} />
        <div style={{ display: "flex", flexDirection: "column",justifyContent: "center",marginRight: 10}}>
        <Typography style ={{fontSize: 30,color: "gray",marginBottom: 10}}>السله فارغه</Typography>
        <Link style={{color: "rgb(157, 88, 181)", border:"1px solid", borderRadius: 20, padding: "5px 0"}} to='/main'>عودة للرئيسية</Link>
        </div>
      </div>
      </div>
    )
}
export default NoData;