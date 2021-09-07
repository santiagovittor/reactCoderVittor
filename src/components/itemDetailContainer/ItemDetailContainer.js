import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const ItemDetailContainer = () => {
    const downloadedData = "https://mocki.io/v1/33c051c1-4a72-45dc-bd47-f880787d47f2"
    const [dataToShow, setDataToShow] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(downloadedData)
            .then(response => response.json())
            .then((data) => {
                const aux = data.find(data => data.id === id)
                setDataToShow(aux);
            }
            )
    }, [id]);
    return (
        dataToShow.length === 0 ? (
            <div className="loadingSpinnerContainer">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </Spinner>
            </div>
        ) : (
            <div className="itemDetailContainer">
                <ItemDetail dataToItemDetail={dataToShow} />
            </div>
        )
    )
}

export default ItemDetailContainer;