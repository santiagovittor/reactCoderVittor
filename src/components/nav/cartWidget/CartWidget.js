import { Link } from "react-router-dom";
import { context } from "../../../context/CartContext";
import { useContext, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const CartWidget = () => {

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);

    const { cart } = useContext(context);
    const cantidad = cart.length;

    const goTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }


    return (cantidad === 0) ? <> </>

    : (
            <>
                <div className="navWidget" data-aos="fade">
                    <div className="widgetNumber">
                        {cantidad}
                    </div>
                    <div className="widgetIcon">
                        <Link to="/cart" id="cartIcon" className="material-icons"  onClick={goTop}>shopping_cart</Link>
                    </div>
                </div>
            </>
        );
}

export default CartWidget;