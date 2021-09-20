import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail"
import NavBar from "../nav/NavBar";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const ItemDetailContainer = () => {
    const downloadedData = "https://mocki.io/v1/58618315-41bb-4b5f-806e-c81b4d06ee03"
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
            <>
            <NavBar />
            <div className="itemDetailContainer">
                <ItemDetail dataToItemDetail={dataToShow} />
            </div>
            </>
        )
    )
}

export default ItemDetailContainer;