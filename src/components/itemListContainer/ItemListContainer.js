import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";


const URL_PRODUCTOS_API = 'https://mocki.io/v1/dd6dfa5b-b5c0-40b5-947b-fe5970db919c'

const ItemListContainer = () => {
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        fetch(URL_PRODUCTOS_API)
            .then(response => response.json())
            .then((data) => {
                const aux = data.filter(data => data.disponible)
                setDataToShow(aux);
                console.log(aux)
            })
    }, []);
    return (
        dataToShow.length === 0 ? (
            <div className="itemContainer">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        ) : (
            <div className="itemList">
                <ItemList dataToItemList={dataToShow} />
            </div>
        )

    )
}
export default ItemListContainer;