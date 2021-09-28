import { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/CartContext";
import ItemCart from "./ItemCart";
import { Button, Image } from "react-bootstrap";
import NavBar from "../nav/NavBar";
import Footer from "../footer/Footer";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {

    const { cart, removeProduct, clearCart } = useContext(context)

    const vaciarCarrito = () => {
        clearCart();
        window.scrollTo(0, 0)
    }

    let contadorPrecioTotal = 0

    cart.forEach((product) => {
        contadorPrecioTotal = ((product.precio * product.cantidad) + contadorPrecioTotal)
    })

    const mapCart = cart.map((product) => (
        <ItemCart key={product.itemId} onRemove={removeProduct} dataToItemCart={product}></ItemCart>
    ))
    return cart.length === 0 ? (
        <>
            <NavBar />
            <div className="emptyCartContainer">
                <h2>Nada por aqui...</h2>
                <Image src="https://previews.123rf.com/images/studiostoks/studiostoks1602/studiostoks160200045/51904057-vaya-estilo-del-arte-pop-retro-mujer-sorprendida-concepto-de-negocio-noticias-inesperadas.jpg" alt="oops" />
                <Link to="/shop"><Button id="addToCartButton">Volver a inicio</Button></Link>
            </div>
            <Footer />
        </>
    ) : (<>
        <NavBar />
        <div className="cartContainer">
            <>
                {mapCart}
            </>
            <div className="cartContainer__other">
                <h3>TOTAL: ${contadorPrecioTotal}</h3>
                <Link to="/checkout"><Button id="addToCartButton">Terminar Compra</Button></Link>
                <Button id="addToCartButton" onClick={vaciarCarrito}>Vaciar Carrito</Button>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Cart;