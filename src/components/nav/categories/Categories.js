import { NavLink } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const Categories = () => {
    return (
        <>
            <div className="nav__categories">
                <DropdownButton id="dropdown-basic-button" title="CATEGORIAS">
                    <Dropdown.Item as="button"><NavLink to="/categoria/Paises">Paises</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/categoria/Clubes">Clubes</NavLink></Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="TEMPORADA">
                    <Dropdown.Item as="button"><NavLink to="/temporada/70s" >70s</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/temporada/80s" >80s</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/temporada/90s" >90s</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/temporada/2000s" >2000s</NavLink></Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="LIGA">
                    <Dropdown.Item as="button"><NavLink to="/liga/España" >España</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/Italia" >Italia</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/Alemania" >Alemania</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/Inglaterra" >Inglaterra</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/Francia" >Francia</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/Argentina" >Argentina</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/Mundial" >Mundial</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/Otros" >Otros</NavLink></Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="COLOR">
                    <Dropdown.Item as="button"><NavLink to="/color/Amarillo" >Amarillo</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/Azul" >Azul</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/Blanco" >Blanco</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/Bordeaux" >Bordeaux</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/Celeste" >Celeste</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/Negro" >Negro</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/Rojo" >Rojo</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/Verde" >Verde</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/Violeta" >Violeta</NavLink></Dropdown.Item>
                </DropdownButton>
            </div>
        </>

    );
}

export default Categories;