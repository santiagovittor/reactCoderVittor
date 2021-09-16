import { useState, createContext } from "react";

export const context = createContext()

const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addProduct = (producto, cantidad) => {
        if (isInCart(producto.id)) {
            const newCart = [...cart]
            newCart.forEach((element) => {
                element.cantidad += cantidad
            })
            setCart(newCart)
            console.log(newCart)
        }
        else {
            const newCart = [...cart, producto]
            setCart(newCart)
            console.log(newCart)
        }
    }

    const removeProduct = (itemId) => {
        if (isInCart(itemId.id)) {
            const newCart = cart.filter(producto => producto.id !== itemId.id)
            setCart(newCart)
            console.log(newCart)
        } else {
            console.log("Este item no está en el carrito")
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(producto => producto.id === id)
    }



    const context = {
        cart,
        addProduct,
        removeProduct,
        clearCart
    }


    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}

export default CustomProvider;