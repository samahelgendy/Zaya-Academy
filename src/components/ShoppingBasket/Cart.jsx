import Translate from '../../Translate';
import AppFooter from '../Home/AppFooter';
import NaveBAr from '../Home/Navbar'
import ShooseSession from './ShooseSession';
import TitleCart from './TitleCart'

function Cart (){
    return(
        <>
          <NaveBAr />
          <Translate />
          <TitleCart />
          <ShooseSession />
          <AppFooter />
        </>
    )
}
export default Cart;