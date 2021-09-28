import Footer from "../footer/Footer";
import NavBar from "../nav/NavBar";
import { Alert, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { context } from "../../context/CartContext";
import { firestore } from "../../firebase";
import { Link } from "react-router-dom";

const CheckOut = () => {


    const [formularioEnviado, setFormularioEnviado] = useState(false)
    const [orderId, setOrderId] = useState()

    const { cart, clearCart } = useContext(context)


    let finalPrice = 0;

    cart.forEach((product) => {
        finalPrice = ((product.precio * product.cantidad) + finalPrice)
    })


    return (
        <>
            <NavBar></NavBar>
            <div className="checkOutContainer">
                <Formik
                    isInitialValid={false}
                    initialValues={{
                        nombre: '',
                        celular: '',
                        correo: ''
                    }}
                    validate={(valores) => {
                        let errores = {}
                        if (!valores.nombre) {
                            errores.nombre = 'Por favor ingresa un nombre.'
                        }
                        else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                            errores.nombre = 'El nombre solo puede contener letras y espacios.'
                        }

                        if (!valores.correo) {
                            errores.correo = 'Por favor ingresa un correo electrónico.'
                        }
                        else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                            errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
                        }

                        if (!valores.celular) {
                            errores.celular = 'Por favor ingresa un celular.'
                        }
                        else if (!/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(valores.celular)) {
                            errores.celular = 'Ingresa un celular válido.'
                        }

                        return errores
                    }}
                    onSubmit={(valores, { resetForm }) => {

                        const collection = firestore.collection("ordenes")

                        let date = new Date()
                        let currentDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();

                        const selfGeneratedOrder = {
                            buyer: {
                                nombre: valores.nombre,
                                phone: valores.celular,
                                email: valores.correo
                            },
                            items: cart,
                            date: currentDate,
                            total: { finalPrice }
                        }

                        const query = collection.add(selfGeneratedOrder);
                        query.then(({ id }) => {
                            setFormularioEnviado(true)
                            setOrderId(id)
                        })
                        query.catch((error) => {
                            console.log(error)
                        }
                        )
                        clearCart()
                        resetForm()
                        setTimeout(() => setFormularioEnviado(false), 15000)
                    }}
                >
                    {({ errors, isValid }) => (
                        <Form className="checkOutContainer__form" >
                            <h1>CHECK OUT.</h1>
                            <div className="checkOutContainer__form--input">
                                <label htmlFor="nombre">Nombre y apellido</label>
                                <Field
                                    type="text"
                                    name="nombre"
                                    placeholder="Esteban Quito"
                                    id="nombre"
                                />
                            </div>
                            <ErrorMessage name="nombre" component={() => (
                                <div className="checkOutContainer__form--error">{errors.nombre}</div>
                            )} />

                            <div className="checkOutContainer__form--input">
                                <label htmlFor="celular">Celular</label>
                                <Field
                                    type="text"
                                    name="celular"
                                    placeholder="1162300345"
                                    id="celular"
                                />
                            </div>
                            <ErrorMessage name="celular" component={() => (
                                <div className="checkOutContainer__form--error">{errors.celular}</div>
                            )} />

                            <div className="checkOutContainer__form--input">
                                <label htmlFor="correo">Mail</label>
                                <Field
                                    type="email"
                                    name="correo"
                                    placeholder="mail@mail.com"
                                    id="correo"
                                />
                            </div>
                            <ErrorMessage name="correo" component={() => (
                                <div className="checkOutContainer__form--error">{errors.correo}</div>
                            )} />
                            <div className="checkOutContainer__form--priceBreakdown">
                                <p>Total: ${finalPrice}</p>
                                <p>IVA: ${finalPrice * 0.21}</p>
                                <p>Precio Final: ${finalPrice * 1.21}</p>
                            </div>
                            {cart.length === 0 ?
                                <>
                                    <Link to="/shop">
                                        <Button variant="dark" className="checkOutContainer__form--button">Volver a la tienda</Button>
                                    </Link>
                                </>

                                :

                                <Button variant="success" disabled={!isValid} className="checkOutContainer__form--button" type="submit">Finalizar compra</Button>
                            }
                            {formularioEnviado ?
                                <Alert variant='success'>Tu pedido número {orderId} se realizó con éxito!</Alert>
                                :
                                <>
                                </>
                            }
                        </Form>
                    )}

                </Formik>
            </div>
            <Footer></Footer>
        </>
    );
}

export default CheckOut;