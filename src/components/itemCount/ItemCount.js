import { Fragment, useState } from "react"
import { Button } from "react-bootstrap"

const ItemCount = ({ stock, onAdd, initial }) => {
    let [contador, setContador] = useState(initial)
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    const agregar = () => {
        if (stock > 0) {
            onAdd(contador)
        }
    }
    return (
        <Fragment>
            <div className="itemCard--top">
                <Button id="plusButton" onClick={sumar}>+</Button>
                <p id="counterNumber">{contador}</p>
                <Button id="minusButton" onClick={restar}>-</Button>
            </div>
            <div className="itemCard--bottom">
                <Button id="addToCartButton" variant="success" disabled={stock ? false : true} onClick={agregar}>Agregar al carrito</Button>
            </div>
        </Fragment>
    );
}

export default ItemCount;