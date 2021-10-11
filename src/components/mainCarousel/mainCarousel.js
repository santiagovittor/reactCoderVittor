import { useState } from "react";
import { Carousel } from "react-bootstrap";

const MainCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel fade activeIndex={index} onSelect={handleSelect} variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.soccerbible.com/media/73151/2-classic-football-shirts-event.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Camisetas vintage</h2>
                        <p>Dificiles de conseguir? Las tenemos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fnikeinc%2Fassets%2F29035%2FNike_NOS_Copacabana_hd_1600.jpg%3F1397663038&f=1&nofb=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Envíos a domicilio</h2>
                        <p>Son gratuitos llevando dos items distintos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sfo2.digitaloceanspaces.com/estaticos/var/www/html/wp-content/uploads/2020/12/gullit-scaled.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>Precios accesibles</h2>
                        <p>
                            Es una cuestión de perspectiva.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default MainCarousel;