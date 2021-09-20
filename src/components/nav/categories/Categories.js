import { NavLink } from "react-router-dom";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

const Categories = () => {
    return (
        <>
            <div className="nav__categories">
                <DropdownButton id="dropdown-basic-button" title="CATEGORIAS">
                    <Dropdown.Item as="button"><NavLink to="/categoria/paises">Paises</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/categoria/clubes">Clubes</NavLink></Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="TEMPORADA">
                    <Dropdown.Item as="button"><NavLink to="/temporada/70s" >70s</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/temporada/80s" >80s</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/temporada/90s" >90s</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/temporada/2000s" >2000s</NavLink></Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="LIGA">
                    <Dropdown.Item as="button"><NavLink to="/liga/españa" >España</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/italia" >Italia</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/alemania" >Alemania</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/inglaterra" >Inglaterra</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/francia" >Francia</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/argentina" >Argentina</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/mundial" >Mundial</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/liga/otros" >Otros</NavLink></Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-basic-button" title="COLOR">
                    <Dropdown.Item as="button"><NavLink to="/color/amarillo" >Amarillo</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/azul" >Azul</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/blanco" >Blanco</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/bordeaux" >Bordeaux</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/celeste" >Celeste</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/negro" >Negro</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/rojo" >Rojo</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/verde" >Verde</NavLink></Dropdown.Item>
                    <Dropdown.Item as="button"><NavLink to="/color/violeta" >Violeta</NavLink></Dropdown.Item>
                </DropdownButton>
            </div>
        </>

    );
}

export default Categories;