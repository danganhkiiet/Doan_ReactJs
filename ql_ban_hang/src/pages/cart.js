import Header from "../components/header";
import Footer from "../components/footer";
import AllProductInCart from "../components/all-product-in-cart";
import BreadCrumb from "../components/breadcrumb";
import InforCustomer from "../components/infor-customer";
function Cart()
{
    return(
        <>
            <Header/>
            <BreadCrumb/>
            <AllProductInCart/>
            <InforCustomer/>
            <Footer/>
        </>
    );
}
export default Cart;