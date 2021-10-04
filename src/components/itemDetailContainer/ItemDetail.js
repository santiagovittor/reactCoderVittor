import ItemCount from "../itemCount/ItemCount";
import { Form, Image, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/CartContext";


const ItemDetail = ({ dataToItemDetail }) => {
    const [buttonType, setButtonType] = useState(false)

    const { addProduct } = useContext(context)

    const goTop = () => {
        window.scrollTo(0, 0)
    }

    const onAdd = (cantidad) => {
        const productToAdd = { ...dataToItemDetail, cantidad }
        addProduct(productToAdd, cantidad)
    }

    return (

        <>

            <div className="itemDetailCardContainer">
                <h4>#{dataToItemDetail.itemId}</h4>
                <Image src={dataToItemDetail.imagen} alt="Soccer Shirt" fluid />
                <ul>
                    <h3>Camiseta {dataToItemDetail.nombre} {dataToItemDetail.kit}</h3>
                    <li>Precio: ${dataToItemDetail.precio}</li>
                    <li>Temporada {dataToItemDetail.temporada}</li>
                    <li>Liga: {dataToItemDetail.liga}</li>
                    <Form.Select aria-label="Default select example">
                        <option>Talle</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </Form.Select>
                </ul>
                {
                    buttonType === false ?
                        <ItemCount stock={dataToItemDetail.stock} initial={1} onAdd={onAdd} handleButton={() => { setButtonType(value => !value) }}></ItemCount>
                        :
                        <>
                            <Button id="addToCartButton" onClick={() => { setButtonType(value => !value) }}>Seguir comprando</Button>
                            <Link to="/cart"><Button id="addToCartButton" variant="success" onClick={goTop}>Terminar mi compra</Button></Link>
                        </>
                }
            </div>
            <div className="itemDetailRightContainer">
                <Image src={dataToItemDetail.imagenDescripcion} fluid alt="Imagen de la camiseta siendo utilizada por el equipo durante ese año." />
                <h2>++ Un poco de historia ++</h2>
                <p>{dataToItemDetail.descripcion}</p>
            </div>
        </>
    );
}

export default ItemDetail;