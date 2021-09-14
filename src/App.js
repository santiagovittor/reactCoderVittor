import NavBar from "./components/nav/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" component={ItemListContainer} exact />
                <Route path="/categoria/:id" component={ItemListContainer} />
                <Route path="/temporada/:id" component={ItemListContainer} />
                <Route path="/liga/:id" component={ItemListContainer} />
                <Route path="/color/:id" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    )
}

export default App