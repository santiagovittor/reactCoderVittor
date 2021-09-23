import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail"
import NavBar from "../nav/NavBar";
import { useParams } from "react-router-dom";
import CustomSpinner from "../Spinner";
import { firestore } from "../../firebase";

const ItemDetailContainer = () => {
    const [dataToShow, setDataToShow] = useState({});
    const { id } = useParams();

    useEffect(() => {

        const db = firestore;
        const collection = db.collection("productos")

        let query = collection.doc(id)
        query = query.get()

        query
            .then((snapshot) => {
                const obtainedItem = snapshot.data()
                console.log(obtainedItem)
                setDataToShow(obtainedItem)
            })
            .catch((error) => {
                console.log(error)
            })



    }, [id]);
    return (
        dataToShow.length === 0 ? (
            <div className="loadingSpinnerContainer">
                <CustomSpinner></CustomSpinner>
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