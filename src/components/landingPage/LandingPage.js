import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';



const LandingPage = () => {

    useEffect(() =>{
        AOS.init({duration: 3000})
    },[]);


    return (
        <>
            <section className="landingPage" data-aos="zoom-out">
                <Link to="/shop"><Button>theFootballStore.</Button></Link>
            </section>
        </>
    );
}

export default LandingPage
