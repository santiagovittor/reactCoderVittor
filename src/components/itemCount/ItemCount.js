import { Fragment, useState } from "react"
import { Button } from "react-bootstrap"

const ItemListCount = ({ stock, onAdd, initial }) => {
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
            <div className="itemList">
                <div className="itemList--top">
                    <Button id="botonSumar" onClick={sumar}>+</Button>
                    <p id="contadorItem">{contador}</p>
                    <Button id="botonRestar" onClick={restar}>-</Button>
                </div>
                <div className="itemList--bottom">
                    <Button id="botonAgregar" variant="success" disabled={stock ? false : true} onClick={agregar}>Agregar al carrito</Button>
                </div>
            </div>
        </Fragment>
    );
}

export default ItemListCount;