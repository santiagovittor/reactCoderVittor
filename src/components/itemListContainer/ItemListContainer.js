import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import NavBar from "../nav/NavBar";
import CustomSpinner from "../Spinner";
import { firestore } from "../../firebase";
import Footer from "../footer/Footer";
import MainCarousel from "../mainCarousel/mainCarousel";

const ItemListContainer = () => {
    const [dataToShow, setDataToShow] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const db = firestore

        const collection = db.collection("productos");

        switch (id) {
            case "Paises":
                let queryPaises = collection.where("categoria", "==", id)
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
                let queryClubes = collection.where("categoria", "==", id)
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
            case "70s":
                let query70s = collection.where("temporada", "<", 1980)
                query70s = query70s.get()
                query70s.then((snapshot) => {

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
            case "80s":
                let query80s = collection.where("temporada", "<", 1990)
                query80s = query80s.get()
                query80s.then((snapshot) => {

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
            case "90s":
                let query90s = collection.where("temporada", "<", 2000)
                query90s = query90s.get()
                query90s.then((snapshot) => {

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
            case "2000s":
                let query2000s = collection.where("temporada", ">", 1999)
                query2000s = query2000s.get()
                query2000s.then((snapshot) => {

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
            case "Alemania":
                let queryAlemania = collection.where("liga", "==", id)
                queryAlemania = queryAlemania.get()
                queryAlemania.then((snapshot) => {

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
            case "España":
                let queryEspaña = collection.where("liga", "==", id)
                queryEspaña = queryEspaña.get()
                queryEspaña.then((snapshot) => {

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
            case "Italia":
                let queryItalia = collection.where("liga", "==", id)
                queryItalia = queryItalia.get()
                queryItalia.then((snapshot) => {

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
            case "Inglaterra":
                let queryInglaterra = collection.where("liga", "==", id)
                queryInglaterra = queryInglaterra.get()
                queryInglaterra.then((snapshot) => {

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
            case "Francia":
                let queryFrancia = collection.where("liga", "==", id)
                queryFrancia = queryFrancia.get()
                queryFrancia.then((snapshot) => {

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
            case "Argentina":
                let queryArgentina = collection.where("liga", "==", id)
                queryArgentina = queryArgentina.get()
                queryArgentina.then((snapshot) => {

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
            case "Mundial":
                let queryMundial = collection.where("liga", "==", id)
                queryMundial = queryMundial.get()
                queryMundial.then((snapshot) => {

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
            case "Amarillo":
                let queryAmarillo = collection.where("color", "==", id)
                queryAmarillo = queryAmarillo.get()
                queryAmarillo.then((snapshot) => {

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
            case "Rojo":
                let queryRojo = collection.where("color", "==", id)
                queryRojo = queryRojo.get()
                queryRojo.then((snapshot) => {

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
            case "Azul":
                let queryAzul = collection.where("color", "==", id)
                queryAzul = queryAzul.get()
                queryAzul.then((snapshot) => {

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
            case "Celeste":
                let queryCeleste = collection.where("color", "==", id)
                queryCeleste = queryCeleste.get()
                queryCeleste.then((snapshot) => {

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
            case "Bordeaux":
                let queryBordeaux = collection.where("color", "==", id)
                queryBordeaux = queryBordeaux.get()
                queryBordeaux.then((snapshot) => {

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
            case "Blanco":
                let queryBlanco = collection.where("color", "==", id)
                queryBlanco = queryBlanco.get()
                queryBlanco.then((snapshot) => {

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
            case "Verde":
                let queryVerde = collection.where("color", "==", id)
                queryVerde = queryVerde.get()
                queryVerde.then((snapshot) => {

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
            case "Violeta":
                let queryVioleta = collection.where("color", "==", id)
                queryVioleta = queryVioleta.get()
                queryVioleta.then((snapshot) => {

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
            case "Negro":
                let queryNegro = collection.where("color", "==", id)
                queryNegro = queryNegro.get()
                queryNegro.then((snapshot) => {

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
                <div className="mainCarousel">
                    <MainCarousel></MainCarousel>
                </div>
                <div className="itemList">
                    <ItemList dataToItemList={dataToShow} />
                </div>
                <Footer />
            </>
        )

    )
}
export default ItemListContainer;