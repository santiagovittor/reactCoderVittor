import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Item = ({ dataToItem }) => {
    return (
        <>
            <div className="itemContainer">
                <h4>#{dataToItem.itemId}</h4>
                <Link to={"/item/" + dataToItem.id}><img src={dataToItem.imagen} alt="Soccer Shirt"></img></Link>
                <ul>
                    <h3>Camiseta {dataToItem.nombre} {dataToItem.kit}</h3>
                    <li>Precio: ${dataToItem.precio}</li>
                </ul>
                <Link to={"/item/" + dataToItem.id}><Button id="detailsButton">Ver Detalles</Button></Link>
            </div>

        </>
    );
}

export default Item;

