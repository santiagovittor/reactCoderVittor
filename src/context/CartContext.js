import { useState, createContext } from "react";

export const context = createContext()

const { Provider } = context;

const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addProduct = (producto, cantidad) => {
        if (isInCart(producto.itemId)) {
            const newCart = [...cart]
            newCart.forEach((element) => {
                element.cantidad += cantidad
            })
            setCart([...newCart])
        }
        else {
            const newCart = [...cart, producto]
            setCart([...newCart])
        }
    }

    const removeProduct = (cartItem) => {
        if (isInCart(cartItem.itemId)) {
            const newCart = cart.filter(producto => producto.itemId !== cartItem.itemId)
            setCart([...newCart])
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(producto => producto.itemId === id)
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