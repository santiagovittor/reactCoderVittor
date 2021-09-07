import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";


const URL_PRODUCTOS_API = 'https://mocki.io/v1/33c051c1-4a72-45dc-bd47-f880787d47f2'

const ItemListContainer = () => {
    const [dataToShow, setDataToShow] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        switch (id) {
            case "paises":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.categoria === "Paises")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "clubes":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.categoria === "Clubes")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "70s":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => ((data.temporada) < 1980) && ((data.temporada) > 1969))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "80s":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => ((data.temporada) < 1990) && ((data.temporada) > 1979))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "90s":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => ((data.temporada) < 2000) && ((data.temporada) > 1989))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "2000s":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => ((data.temporada) > 1999))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "españa":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.liga === "España")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "italia":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.liga === "Italia")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "inglaterra":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.liga === "Inglaterra")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "mundial":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.liga === "Mundial")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "francia":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.liga === "Francia")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "alemania":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.liga === "Alemania")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "argentina":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.liga === "Argentina")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "otros":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => (data.liga !== "España") && (data.liga !== "Argentina") && (data.liga !== "Italia") && (data.liga !== "Alemania") && (data.liga !== "Inglaterra") && (data.liga !== "Francia") && (data.liga !== "Mundial"))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            default:
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((data) => {
                        let aux = data.filter(data => data.disponible)
                        setDataToShow(aux);
                    }), 1000
                );
        }
    }, [id]);


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