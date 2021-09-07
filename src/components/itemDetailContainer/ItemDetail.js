import ItemCount from "../itemCount/ItemCount";
import { Form } from "react-bootstrap";
import { Image } from "react-bootstrap";

const ItemDetail = ({ dataToItemDetail }) => {
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
                <ItemCount stock={5} initial={1} onAdd={(cantidad) => { console.log(cantidad + " " + "camisetas " + dataToItemDetail.nombre + " " + dataToItemDetail.kit + "= $" + (cantidad * dataToItemDetail.precio)) }}></ItemCount>
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