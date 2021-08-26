import { Fragment, useState } from "react"
import { Button } from "react-bootstrap"


//            <ItemListCount stock={5} initial={1} onAdd={(cantidad)=>{console.log(cantidad)}}/>
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

            <div className="itemCard--top">
                <Button id="botonSumar" onClick={sumar}>+</Button>
                <p id="contadorItem">{contador}</p>
                <Button id="botonRestar" onClick={restar}>-</Button>
            </div>
            <div className="itemCard--bottom">
                <Button id="botonAgregar" variant="success" disabled={stock ? false : true} onClick={agregar}>Agregar al carrito</Button>
            </div>
        </Fragment>
    );
}

export default ItemListCount;