import { Link } from "react-router-dom";
import { context } from "../../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {


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
                <div className="navWidget">
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