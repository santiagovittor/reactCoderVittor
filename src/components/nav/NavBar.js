import CartWidget from "./cartWidget/CartWidget";
import ButtonSwitch from "./buttonSwitch/ButtonSwitch"
const NavBar = () => {
    return (
        <>
            <header id="main-header">
                <h1>theFootballStore</h1>
                <nav>
                    <a href="index.html">link</a>
                    <br></br>
                    <a href="index.html">link</a>
                </nav>
                <ButtonSwitch />
                <CartWidget />
            </header>
        </>
    )
}
export default NavBar;