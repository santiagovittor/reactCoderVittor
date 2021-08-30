import NavBar from "./components/nav/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";

const App = () => {
    return (
        <>
            <NavBar />
            <ItemDetailContainer />
        </>
    )
}

export default App