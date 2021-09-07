import CartWidget from "./cartWidget/CartWidget";
import { Link } from "react-router-dom";
import Categories from "./categories/Categories";


const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">
                        <h1>theFootballStore</h1>
                    </Link>
                    <Categories />
                    <CartWidget />
                </nav>
            </header>
        </>
    )
}
export default NavBar;