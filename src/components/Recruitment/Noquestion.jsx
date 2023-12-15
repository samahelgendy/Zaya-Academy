import { CommentOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useTranslation } from "react-i18next";

function Noquestions (){
    const {t} = useTranslation();
    return(
        <div style={{ marginTop:20}}>
        <CommentOutlined style={{fontSize:40 , color:"gray" , marginBottom:10 , display:"block"}} />
     <Typography.Text>{t("Noquestions")}</Typography.Text>
        </div>
    )
}
export default Noquestions;