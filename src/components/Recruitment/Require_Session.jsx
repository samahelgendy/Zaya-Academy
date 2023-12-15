import { CommentOutlined} from "@ant-design/icons";
import { Typography } from "antd";
import { t } from "i18next";
import { useTranslation } from "react-i18next";


function Require_Session (){
    const {t} = useTranslation();
    return(
        <div style={{padding:"60px 0" , fontWeight:"bold"}}>
           <h3 >{t("skill")}</h3>
           <ul style={{margin:"20px 0"}}>
            <li>- {t("design")}</li>
            <li>- {t("Content")}</li>
            <li>- {t("appearance")}</li>
            <li>- {t("programming")}</li>
           </ul>
           <Typography.Paragraph>{t("welcomes")}</Typography.Paragraph>
           <Typography.Paragraph>zaya.digital@outlook.sa</Typography.Paragraph>
           <div>

           </div>
        </div>
    )
}
export default Require_Session;