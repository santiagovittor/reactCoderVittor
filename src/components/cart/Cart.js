import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/CartContext";
import ItemCart from "./ItemCart";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer";
import { Button, Image, Alert } from "react-bootstrap";
import { FiCheckCircle, FiInfo } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Cart = () => {

    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


    const { cart, removeProduct, clearCart } = useContext(context);

    const vaciarCarrito = () => {
        clearCart();
        window.scrollTo(0, 0)
    };

    let contadorPrecioTotal = 0

    cart.forEach((product) => {
        contadorPrecioTotal = ((product.precio * product.cantidad) + contadorPrecioTotal)
    });

    const mapCart = cart.map((product) => (
        <ItemCart key={product.itemId} onRemove={removeProduct} dataToItemCart={product}></ItemCart>
    ));
    return cart.length === 0 ?
        (
            <>
                <NavBar />
                <div className="emptyCartContainer">
                    <h2>Nada por aqui...</h2>
                    <Image src="https://previews.123rf.com/images/studiostoks/studiostoks1602/studiostoks160200045/51904057-vaya-estilo-del-arte-pop-retro-mujer-sorprendida-concepto-de-negocio-noticias-inesperadas.jpg" alt="oops" />
                    <Link to="/shop"><Button id="addToCartButton">Volver a inicio</Button></Link>
                </div>
                <Footer />
            </>
        )
        :
        (<>
            <NavBar />
            <div className="cartContainer" data-aos="zoom-out">
                <>
                    {mapCart}
                </>
                <div className="cartContainer__other">
                    <div className="classContainer__other--totalPrice">
                    <h3>TOTAL: ${contadorPrecioTotal}</h3>
                    </div>
                    {cart.length > 2 ? 
                    <Alert variant='success'><FiCheckCircle></FiCheckCircle> Envío gratis</Alert>
                    : 
                    <>
                    <Alert variant='info'><FiInfo></FiInfo> Recordá que llevando tres items distintos tu envío es gratuito.</Alert>
                    <Link to="/shop"><Button id="addToCartButton" onClick={()=>{window.scrollTo(0, 0)}}>Seguir Comprando</Button></Link>
                    </>
                    }
                    <div className="classContainer__other--buttons">
                    <Link to="/checkout"><Button id="addToCartButton" onClick={()=>{window.scrollTo(0, 0)}}>Terminar Compra</Button></Link>
                    <Button id="addToCartButton" onClick={vaciarCarrito}>Vaciar Carrito</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
        )
}

export default Cart;