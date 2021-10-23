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
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fnikeinc%2Fassets%2F29035%2FNike_NOS_Copacabana_hd_1600.jpg%3F1397663038&f=1&nofb=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2>Camisetas vintage</h2>
                        <p>Dificiles de conseguir? Las tenemos.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.performgroup.com/di/library/GOAL/a8/16/pity-martinez-river-plate-libertadores-madrid_19utjyk6efai7z8h3qbb12jua.jpg?t=-1794459329"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2>Envíos a domicilio</h2>
                        <p>Son gratuitos llevando tres items distintos.</p>
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
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://ronaldo.com/wp-content/uploads/2019/03/GettyImages-72353917-scaled.jpg"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h2>Diseño de sitios web</h2>
                        <p>
                            De algo hay que vivir
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2020/02/2016/1242/eec70c4f-Dennis-Bergkamp-Arsenal.jpg?ve=1&tl=1"
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h2>Contacto</h2>
                        <p>
                            svittordev@gmail.com
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i0.wp.com/www.lecorner.org/wp-content/uploads/2020/03/Icon_ONZ_240698_45_06.jpg?resize=1536%2C1024"
                        alt="Fifth slide"
                    />
                    <Carousel.Caption>
                        <h2>Michael Laudrup</h2>
                        <p>
                            That's it. That's the picture.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default MainCarousel;