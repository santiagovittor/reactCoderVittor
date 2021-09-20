import { Button, Image } from "react-bootstrap";

const ItemCart = ({ dataToItemCart, onRemove, onEmpty }) => {

    const toRemove = () => {
        const productToRemove = { ...dataToItemCart }
        onRemove(productToRemove)
    }

    return (
        <div className="cartContainer__items">
            <div className="cartContainer__items--info">
                <h3>Camiseta  {dataToItemCart.nombre}</h3>
                <h4>Cantidad: {dataToItemCart.cantidad}</h4>
                <h4>Total Item: ${((dataToItemCart.cantidad) * (dataToItemCart.precio))}</h4>
                <Button id="addToCartButton" onClick={toRemove}>Eliminar Item</Button>
                <Button id="addToCartButton" onClick={onEmpty}>Vaciar Carrito</Button>
            </div>
            <div className="cartContainer__items--imagen">
                <Image fluid src={dataToItemCart.imagen} />
            </div>
        </div>
    );
}

export default ItemCart;