import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";


const URL_PRODUCTOS_API = 'https://mocki.io/v1/f3f2445e-2213-48d1-a9c5-7cbaa5842573'

const ItemListContainer = () => {
    const [dataToShow, setDataToShow] = useState([]);

    useEffect(() => {
        setTimeout(() => fetch(URL_PRODUCTOS_API)
            .then(response => response.json())
            .then((data) => {
                const aux = data.filter(data => data.disponible)
                setDataToShow(aux);
                console.log(aux)
            }), 2000
        )
    }, []);


    return (
        dataToShow.length === 0 ? (
            <div className="loadingSpinnerContainer">
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