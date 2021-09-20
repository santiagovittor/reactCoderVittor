import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <section className="landingPage">
                <Link to="/shop"><Button>theFootballStore.</Button></Link>
            </section>
        </>
    );
}

export default LandingPage
