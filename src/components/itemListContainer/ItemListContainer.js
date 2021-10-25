import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../firebase";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ItemList from "./ItemList";
import NavBar from "../nav/NavBar";
import CustomSpinner from "../Spinner";
import MainCarousel from "../mainCarousel/mainCarousel";
import Footer from "../footer/Footer";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const ItemListContainer = () => {


    const [dataToShow, setDataToShow] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchBar, setSearchBar] = useState(false)
    const { id } = useParams();


    const applyFilter = (searchTerm) => {
        setSearchTerm(searchTerm);
        const filtered = dataToShow.filter((searched) => {
            return Object.values(searched)
                .join(" ")
                .toLowerCase().includes(searchTerm.toLowerCase())
        })
        setFilteredData(filtered)
    };

    const handleForget = () => {
        setSearchBar(prev => !prev)
    }

    useEffect(() => {

        AOS.init({ duration: 2500 })

        const db = firestore
        const collection = db.collection("productos");



        if (id === "Paises") {
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
        } else if (id === "Clubes") {
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

        } else if (id === "Alemania") {
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
        } else if (id === "España") {
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

        } else if (id === "Italia") {
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

        } else if (id === "Inglaterra") {
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
        } else if (id === "Francia") {
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
        } else if (id === "Holanda") {
            let queryHolanda = collection.where("liga", "==", id)
            queryHolanda = queryHolanda.get()
            queryHolanda.then((snapshot) => {

                const docs = snapshot.docs
                const products = []

                docs.forEach((doc) => {
                    const docSnapshot = doc;
                    const productFromFirestoreWithId = { ...docSnapshot.data(), id: docSnapshot.id }
                    products.push(productFromFirestoreWithId)
                })

                setDataToShow(products)
            });
        } else if (id === "Argentina") {
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

        } else if (id === "Mundial") {
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
        } else if (id === "Amarillo") {
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
        } else if (id === "Rojo") {
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

        } else if (id === "Azul") {
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
        } else if (id === "Celeste") {
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
        } else if (id === "Bordeaux") {
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
        } else if (id === "Blanco") {
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
        } else if (id === "Verde") {
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
        } else if (id === "Violeta") {
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
        } else if (id === "Negro") {
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
        } else {
            const allProductsFromFirestore = collection.get()
            allProductsFromFirestore.then((snapshot) => {

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
            <>
                <NavBar>
                </NavBar>
                <div className="loadingSpinnerContainer">
                    <CustomSpinner>
                    </CustomSpinner>
                </div>
            </>
        ) : (
            id ? (
                <>
                    <NavBar />
                    <div className="itemList">
                        <ItemList dataToItemList={filteredData.length > 0 ? filteredData : dataToShow} />
                    </div>
                    <Footer />
                </>

            ) : (
                <>
                    <header>
                        <NavBar />
                        <div className="searchBar">
                            {
                                searchBar ?
                                    <input
                                        data-aos="fade"
                                        data-aos-duration="750" 
                                        className="searchBar__input"
                                        placeholder="Buscá tu favorita"
                                        value={searchTerm}
                                        type="text"
                                        onChange={(e) => applyFilter(e.currentTarget.value)}
                                    />
                                    :
                                    <>
                                    </>
                            }

                            <button id="searchButton" onClick={handleForget}>{searchBar ? <AiOutlineClose /> : <AiOutlineSearch />}</button>
                        </div>
                    </header>
                    <div className="mainCarousel" data-aos="fade">
                        <MainCarousel></MainCarousel>
                    </div>
                    <div className="itemList" >
                        <ItemList dataToItemList={filteredData.length > 0 ? filteredData : dataToShow} />
                    </div>
                    <Footer />
                </>

            )

        )
    )
}
export default ItemListContainer;