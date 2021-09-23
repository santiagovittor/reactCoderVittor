import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import NavBar from "../nav/NavBar";
import CustomSpinner from "../Spinner";
import { firestore } from "../../firebase";

const ItemListContainer = () => {
    const [dataToShow, setDataToShow] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = firestore

        const collection = db.collection("productos");

        switch (id) {
            case "Paises":
                let queryPaises = collection.where("categoria", "==", "Paises")
                queryPaises = queryPaises.get()
                queryPaises.then((snapshot) => {
                    const docs = snapshot.docs
                    const products = []

                    docs.forEach((doc) => {

                        const docSnapshot = doc;
                        const productFromFirestoreWithId = { ...docSnapshot.data(), id: docSnapshot.id }
                        products.push(productFromFirestoreWithId)

                    })
                    setDataToShow(products)
                });
                break
            case "Clubes":
                let queryClubes = collection.where("categoria", "==", "Clubes")
                queryClubes = queryClubes.get()
                queryClubes.then((snapshot) => {

                    const docs = snapshot.docs
                    const products = []

                    docs.forEach((doc) => {

                        const docSnapshot = doc;
                        const productFromFirestoreWithId = { ...docSnapshot.data(), id: docSnapshot.id }
                        products.push(productFromFirestoreWithId)

                    })

                    setDataToShow(products)
                });
                break
            default:

                const query = collection.get()
                query.then((snapshot) => {

                    const docs = snapshot.docs
                    const products = []

                    docs.forEach((doc) => {
                        const docSnapshot = doc;

                        const productFromFirestoreWithId = { ...docSnapshot.data(), id: docSnapshot.id }
                        products.push(productFromFirestoreWithId)
                    })

                    setDataToShow(products)
                }
                )

        }


    }, [id]);


    return (
        dataToShow.length === 0 ? (
            <div className="loadingSpinnerContainer">
                <CustomSpinner></CustomSpinner>
            </div>
        ) : (
            <>
                <NavBar />
                <div className="itemList">
                    <ItemList dataToItemList={dataToShow} />
                </div>
            </>
        )

    )
}
export default ItemListContainer;