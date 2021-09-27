import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"
import ItemListContainer from "./components/itemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomProvider from "./context/CartContext";
import LandingPage from "./components/landingPage/LandingPage";
import CheckOut from './components/checkOut/CheckOut';


const App = () => {
    return (
        <BrowserRouter>
            <CustomProvider>
                <Switch>
                    <Route path="/" component={LandingPage} exact />
                    <Route path="/shop" component={ItemListContainer} exact />
                    <Route path="/categoria/:id" component={ItemListContainer} />
                    <Route path="/temporada/:id" component={ItemListContainer} />
                    <Route path="/liga/:id" component={ItemListContainer} />
                    <Route path="/color/:id" component={ItemListContainer} />
                    <Route path="/item/:id" component={ItemDetailContainer} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={CheckOut} />
                </Switch>
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App