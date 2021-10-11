import { NavLink } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Categories = () => {


    useEffect(() =>{
        AOS.init({duration: 1500})
    },[]);


    const scrollTo = () =>{
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }


    return (
        <>
            <div className="nav__categories" data-aos="fade">
                <DropdownButton id="dropdown-basic-button" title="CATEGORIAS">
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/categoria/Paises">Paises</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/categoria/Clubes">Clubes</NavLink></Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="LIGA">
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/liga/España" >España</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/liga/Italia" >Italia</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/liga/Alemania" >Alemania</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/liga/Inglaterra" >Inglaterra</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/liga/Francia" >Francia</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/liga/Holanda" >Holanda</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/liga/Argentina" >Argentina</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/liga/Mundial" >Mundial</NavLink></Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="COLOR">
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Amarillo" >Amarillo</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Azul" >Azul</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Blanco" >Blanco</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Bordeaux" >Bordeaux</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Celeste" >Celeste</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Negro" >Negro</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Rojo" >Rojo</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Verde" >Verde</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button" onClick={scrollTo}><NavLink to="/color/Violeta" >Violeta</NavLink></Dropdown.Item>
                </DropdownButton>
            </div>
        </>

    );
}

export default Categories;