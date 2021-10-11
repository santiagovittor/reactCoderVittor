import ItemCount from "../itemCount/ItemCount";
import { Form, Image, Button, Alert } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../../context/CartContext";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ItemDetail = ({ dataToItemDetail }) => {

    useEffect(() =>{
        AOS.init({duration: 2000})
    },[]);

    
    const [buttonType, setButtonType] = useState(false);
    const [talle, setTalle] = useState()



    const { addProduct } = useContext(context)


    const handleSelectedSize = (e) => {
        const selectedSize = e.target.value;
        setTalle(selectedSize)
    }

    const goTop = () => {
        window.scrollTo(0, 0)
    }

    const onAdd = (cantidad) => {
        const productToAdd = { ...dataToItemDetail, cantidad, talle }
        addProduct(productToAdd, cantidad, talle)
    }

    return (
        <>

            <div className="itemDetailCardContainer" data-aos="fade-right">
                <h4>#{dataToItemDetail.itemId}</h4>
                <Image data-aos="zoom-in" src={dataToItemDetail.imagen} alt="Soccer Shirt" fluid />
                <ul data-aos="zoom-in">
                    <h3>Camiseta {dataToItemDetail.nombre} {dataToItemDetail.kit}</h3>
                    <li>Precio: ${dataToItemDetail.precio}</li>
                    <li>Temporada {dataToItemDetail.temporada}</li>
                    <li>Liga: {dataToItemDetail.liga}</li>
                    <Form.Select aria-label="Default select example" onChange={handleSelectedSize} >
                        <option >Talle</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </Form.Select>
                </ul>

                {talle ? (
                    buttonType === false ?
                        <ItemCount  stock={dataToItemDetail.stock} initial={1} onAdd={onAdd} handleButton={() => { setButtonType(value => !value) }}></ItemCount>
                        :
                        <>
                            <Button id="addToCartButton" onClick={() => { setButtonType(value => !value) }}>Seguir comprando</Button>
                            <Link to="/cart"><Button id="addToCartButton" variant="success" onClick={goTop}>Terminar mi compra</Button></Link>
                        </>

                ) :
                    <>
                        <Alert variant="info">Por favor selecciona un talle.</Alert>
                    </>
                }
            </div>

            <div className="itemDetailRightContainer" data-aos="fade-left">
                <Image data-aos="zoom-in" src={dataToItemDetail.imagenDescripcion} fluid alt="Imagen de la camiseta siendo utilizada por el equipo durante ese año." />
                <h2 data-aos="zoom-in">CONTEXTO</h2>
                <p data-aos="zoom-in">{dataToItemDetail.descripcion}</p>
            </div>
        </>

    );
}

export default ItemDetail;