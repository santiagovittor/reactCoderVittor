import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {
    const downloadedData = "https://mocki.io/v1/3b646856-a590-43a9-9a8b-a8dc9d636ad4"
    const [dataToShow, setDataToShow] = useState({});
    console.log(dataToShow)
    useEffect(() => {
        fetch(downloadedData)
            .then(response => response.json())
            .then((data) => {
                const aux = data.find(data => data.id === "12")
                setDataToShow(aux);
                console.log("aux es " + aux)
            })
    }, []);
    return (
        <div className="itemDetailContainer">
            <ItemDetail dataToItemDetail={dataToShow} />
        </div>
    );
}

export default ItemDetailContainer;