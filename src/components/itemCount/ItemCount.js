import { Fragment, useState } from "react"
import { Button } from "react-bootstrap"

const ItemCount = ({ stock, initial, onAdd, handleButton }) => {
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
            handleButton()
        }
    }

    return (
        <Fragment>
            {stock ?
                <div className="itemCard--top">
                    <Button id="plusButton" onClick={sumar}>+</Button>
                    <p id="counterNumber">{counter}</p>
                    <Button id="minusButton" onClick={restar}>-</Button>
                </div>
                :
                <>
                </>
            }

            {stock ?
                <div className="itemCard--bottom">
                    <Button id="addToCartButton" onClick={addItems}>Agregar al carrito</Button>
                </div>
                :
                <p>Este item se encuentra sin stock actualmente.</p>
            }
        </Fragment>
    );
}

export default ItemCount;