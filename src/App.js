import NavBar from "./components/nav/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"

const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer nombre="Santi" />
        </>
    )
}

export default App