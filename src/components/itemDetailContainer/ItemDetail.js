import ItemCount from "../itemCount/ItemCount";
import { Form, Image, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ dataToItemDetail }) => {
    const [buttonType, setButtonType] = useState(false)

    return (
        <>
            <div className="itemDetailCardContainer">
                <h4>#{dataToItemDetail.id}</h4>
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
                        <ItemCount stock={5} initial={1} calculate={(cantidad) => console.log("$" + (dataToItemDetail.precio) * cantidad)} onAdd={(cantidad) => console.log(cantidad + " " + dataToItemDetail.nombre)} handleButton={() => { setButtonType(value => !value) }}></ItemCount>
                        :
                        <>
                            <Button id="addToCartButton" onClick={() => { setButtonType(value => !value) }}>Seguir comprando</Button>
                            <Link to="/cart"><Button id="addToCartButton" variant="success">Terminar mi compra</Button></Link>
                        </>
                }
            </div>
            <div className="itemDetailRightContainer">
                <Image src={dataToItemDetail.imagenDescripcion} fluid alt="Imagen de la camiseta siendo utilizada por el equipo durante ese año." />
                <h3>++ Un poco de historia ++</h3>
                <p>{dataToItemDetail.descripcion}</p>
            </div>
        </>
    );
}

export default ItemDetail;