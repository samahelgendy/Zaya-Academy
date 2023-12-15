import { useTranslation } from "react-i18next";

function ProductExchange (){
    const {t} = useTranslation();
    return(
        <div className="container" style={{padding:50}}>
        <p>{t("All products")}</p>
        </div>
    )
}
export default ProductExchange;