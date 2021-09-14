import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";


const URL_PRODUCTOS_API = 'https://mocki.io/v1/2f9c5e3d-1341-4a8e-8598-197af0c9fba1'

const ItemListContainer = () => {
    const [dataToShow, setDataToShow] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        switch (id) {
            case "paises":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.categoria === "Paises")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "clubes":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.categoria === "Clubes")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "70s":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => ((response.temporada) < 1980) && ((response.temporada) > 1969))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "80s":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => ((response.temporada) < 1990) && ((response.temporada) > 1979))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "90s":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => ((response.temporada) < 2000) && ((response.temporada) > 1989))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "2000s":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => ((response.temporada) > 1999))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "españa":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.liga === "España")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "italia":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.liga === "Italia")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "inglaterra":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.liga === "Inglaterra")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "mundial":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.liga === "Mundial")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "francia":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.liga === "Francia")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "alemania":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.liga === "Alemania")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "argentina":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.liga === "Argentina")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "otros":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => (response.liga !== "España") && (response.liga !== "Argentina") && (response.liga !== "Italia") && (response.liga !== "Alemania") && (response.liga !== "Inglaterra") && (response.liga !== "Francia") && (response.liga !== "Mundial"))
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "blanco":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Blanco")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "azul":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Azul")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "rojo":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Rojo")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "bordeaux":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Bordeaux")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "amarillo":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Amarillo")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "celeste":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Celeste")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "negro":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Negro")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "verde":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Verde")
                        setDataToShow(aux);
                    }), 1000
                );
                break
            case "violeta":
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.color === "Violeta")
                        setDataToShow(aux);
                    }), 1000
                );
                break


            default:
                setTimeout(() => fetch(URL_PRODUCTOS_API)
                    .then(response => response.json())
                    .then((response) => {
                        let aux = response.filter(response => response.disponible)
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