import { Link } from "react-router-dom";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
    
    return (
        <div className="footer">
            <div className="mt-5 pt-5 pb-5 footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xs-12 about-company">
                        <h1>the<span className="logoFootball">Football</span>Store.</h1>
                            <p className="pr-5 text-white-50">Camisetas clásicas. Ni más, ni menos. </p>
                            <p><i className="fa fa-facebook-square mr-1"></i><i className="fa fa-linkedin-square"></i></p>
                        </div>
                        <div className="col-lg-3 col-xs-12 links">
                            <h3 className="mt-lg-0 mt-sm-3">Enlaces</h3>
                            <ul className="m-0 p-0">
                                <li onClick={scrollToTop}>Ir arriba</li>
                                <Link to="/cart"><li>Ver carrito</li></Link>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-xs-12 location">
                            <h3 className="mt-lg-0 mt-sm-4">Ubicación</h3>
                            <p>General Pacheco, Buenos Aires, Argentina.</p>
                            <p>1162300345</p>
                            <p>santi.vittor-@live.com.ar</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <p className=""><small className="text-white-50">© Santiago Vittor, 2021. Todos los derechos reservados.</small></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Footer;