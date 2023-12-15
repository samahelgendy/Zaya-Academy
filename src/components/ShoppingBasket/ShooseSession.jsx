import { useSelector } from "react-redux";
import Product from "./Products";
import NoData from "./noData";

function ShooseSession (){
    const carts = useSelector(state => state.cart);
    
    if(carts.length >= 1){
    return(
        <Product />
    )
    }else{
        return(
        <NoData />
        )
    }
}
export default ShooseSession;