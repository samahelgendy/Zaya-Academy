import {Routes , Route} from 'react-router-dom';
import FirstLogin from '../Login/rejecter.jsx';
import SecondLogin from '../Login/Login.jsx';
import HomeContent from '../Home/HomeContent.jsx';
import Cart from '../ShoppingBasket/Cart.jsx';
import ContentPage from '../singlePage/ContentPage.jsx';
import Component_Digital from '../Digital_transformation_services.jsx/Component_Digital.jsx';
import Component_Sales from '../Component_Sales/Component_Sales.jsx';
import Components_Recruitment from '../Recruitment/Components_Recruitment.jsx';
import Component_Courses from '../Educational_Courses/Component_Courses.jsx';
import Component_Digital_Services from '../Digital_transformation/Component_Digital_Services.jsx';
import Component_Privacy from '../privacy_policy/Component_Privacy.jsx';
import ComponentExchange from '../Exchange/ComponentExchange.jsx';
import Component_notifications from '../Notifications/Component_notifications.jsx';
import Component_Request from '../Request/Component_Request.jsx';
import Component_Order from '../OrderAwating/Component_Order.jsx';
import Wishes_Component from '../Wishes/Wishes_Component.jsx';
import Component_Account from '../Account/Component_Account.jsx';

function AppRouter (){
    return(
        <Routes>
            {/* <Route path="/" element={<FirstLogin />} />
            <Route path="login" element={<SecondLogin />} /> */}
               <Route path="/" element={<HomeContent />} />
               <Route path="cart" element={<Cart />} />
               <Route path=":productID" element={<ContentPage />} />
               <Route path="Onlinestores" element={<Component_Digital />} />
               <Route path="sale" element={<Component_Sales />} />
               <Route path="blog" element={<Components_Recruitment />} />
               <Route path="courses" element={<Component_Courses />} />
               <Route path="digital" element={<Component_Digital_Services />} />
               <Route path="policy" element={<Component_Privacy />} />
               <Route path="exchange" element={<ComponentExchange />} />
               <Route path="notifications" element={<Component_notifications />} />
               <Route path="requests" element={<Component_Request />} />
               <Route path="awaiting" element={<Component_Order/>} />
               <Route path="wishes" element={<Wishes_Component/>} />
               <Route path="account" element={<Component_Account/>} />
            {/* </Route > */}
        </Routes>
    )
}
export default AppRouter;



