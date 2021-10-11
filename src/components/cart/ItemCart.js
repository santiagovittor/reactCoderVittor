import { Button, Image } from "react-bootstrap";

const ItemCart = ({ dataToItemCart, onRemove }) => {

    const toRemove = () => {
        window.scrollTo(0, 0)
        const productToRemove = { ...dataToItemCart }
        onRemove(productToRemove)
    };

    return (
        <div className="cartContainer__items">
            <div className="cartContainer__items--info">
                <h3>Camiseta  {dataToItemCart.nombre}</h3>
                <h6>Cantidad: {dataToItemCart.cantidad}</h6>
                <h6>Talle: {dataToItemCart.talle}</h6>
                <h6>Total Item: ${((dataToItemCart.cantidad) * (dataToItemCart.precio))}</h6>
                <Button id="addToCartButton" onClick={toRemove}>Eliminar Item</Button>
            </div>
            <div className="cartContainer__items--imagen">
                <Image src={dataToItemCart.imagen} />
            </div>
        </div>
    );
}

export default ItemCart;