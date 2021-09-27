import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Item = ({ dataToItem }) => {
    const goTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <div className="itemContainer">
                <h4>#{dataToItem.itemId}</h4>
                <Link onClick={goTop} to={"/item/" + dataToItem.id}><img src={dataToItem.imagen} alt="Soccer Shirt"></img></Link>
                <ul>
                    <h3>Camiseta {dataToItem.nombre} {dataToItem.kit}</h3>
                    <li>Precio: ${dataToItem.precio}</li>
                </ul>
                <Link onClick={goTop} to={"/item/" + dataToItem.id}><Button id="detailsButton">Ver Detalles</Button></Link>
            </div>

        </>
    );
}

export default Item;

