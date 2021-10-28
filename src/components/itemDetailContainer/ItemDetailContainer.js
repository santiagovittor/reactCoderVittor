import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail"
import NavBar from "../nav/NavBar";
import { useParams } from "react-router-dom";
import CustomSpinner from "../Spinner";
import { firestore } from "../../firebase";
import Footer from "../footer/Footer";

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
                setDataToShow(obtainedItem)
            })
            .catch((error) => {
                console.error(error)
            })

    }, [id]);
    return (
        dataToShow===false ? (
            <div className="loadingSpinnerContainer">
                <CustomSpinner></CustomSpinner>
            </div>
        ) : (
            <>
                <NavBar />
                <div className="itemDetailContainer">
                    <ItemDetail dataToItemDetail={dataToShow} />
                </div>
                <Footer />
            </>
        )
    )
}

export default ItemDetailContainer;