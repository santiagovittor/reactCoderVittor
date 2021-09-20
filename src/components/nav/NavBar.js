import CartWidget from "./cartWidget/CartWidget";
import { Link } from "react-router-dom";
import Categories from "./categories/Categories";

const NavBar = () => {
    return (
        <>
            <header>
                <nav className="navBar">
                    <Link to="/shop">
                        <h1>the<span className="logoFootball">Football</span>Store.</h1>
                    </Link>
                    <Categories />
                    <CartWidget />
                </nav>
            </header>
        </>
    )
}
export default NavBar;