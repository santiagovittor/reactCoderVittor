import { Fragment, useState } from "react"
import { Button } from "react-bootstrap"

const ItemCount = ({ stock, initial, onAdd, handleButton, calculate }) => {
    let [counter, setCounter] = useState(initial)
    const sumar = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }
    const addItems = () => {
        if (stock > 0) {
            onAdd(counter)
            calculate(counter)
            handleButton()
        }
    }

    return (
        <Fragment>
            <div className="itemCard--top">
                <Button id="plusButton" onClick={sumar}>+</Button>
                <p id="counterNumber">{counter}</p>
                <Button id="minusButton" onClick={restar}>-</Button>
            </div>
            <div className="itemCard--bottom">
                <Button id="addToCartButton" variant="success" disabled={stock ? false : true} onClick={addItems}>Agregar al carrito</Button>
            </div>
        </Fragment>
    );
}

export default ItemCount;