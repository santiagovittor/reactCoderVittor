import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Item = ({ dataToItem }) => {

    useEffect(() =>{
        AOS.init({duration: 2500})
    },[]);


    const goTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <>
                <div className="itemContainer" data-aos="fade-up">
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

