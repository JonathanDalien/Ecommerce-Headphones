import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);

    const initialCardState = [];
    const initialTotalQuantityState = 0;

    const [cartItems, setCartItems] = useState(initialCardState);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(initialTotalQuantityState);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        const quantityData = JSON.parse(localStorage.getItem("ttlqty"));
        if (cartData) {
            setCartItems(cartData);
            setTotalQuantity(quantityData)
            console.log(cartItems)
        }
    }, []);

    useEffect(() => {
        if (cartItems !== initialCardState) {
            localStorage.setItem("ttlqty", JSON.stringify(totalQuantity));
            localStorage.setItem("cart", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    const incQty = () => {
        setQty(prevQty => prevQty + 1)
    }
    const decQty = () => {
        setQty(prevQty => {
            if (prevQty === 1) {
                return prevQty
            } else {
                return prevQty - 1
            }
        })
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find(item => item._id === product._id);
        let newCartItems = cartItems.filter(item => item._id !== product._id)

        setCartItems(newCartItems)

        setTotalPrice(prevPrice => prevPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantity(prevQuantity => prevQuantity - foundProduct.quantity)
    }


    const onAdd = async (product, quantity) => {
        const checkProductInCart = cartItems.find(item => item._id === product._id);
        setTotalPrice((prevtotal => prevtotal + product.price * quantity))
        setTotalQuantity(prevQty => prevQty + quantity)

        if (checkProductInCart) {

            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id) { return { ...cartProduct, quantity: cartProduct.quantity + quantity } } else { return { ...cartProduct } }
            })
            setCartItems(updatedCartItems)
        } else {
            product.quantity = quantity;

            setCartItems((prevCart) => {
                return [...prevCart, { ...product }]
            })
        }
        toast.success(`${qty} ${product.name} added to the cart.`)
    }

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find(item => item._id === id);
        index = cartItems.findIndex((product) => product._id === id)
        let newCartItems = cartItems.filter(item => item._id !== id)

        if (value === "inc") {
            setCartItems([
                ...newCartItems.slice(0, index),
                { ...foundProduct, quantity: foundProduct.quantity + 1 },
                ...newCartItems.slice(index)
            ]);
            setTotalPrice(prevprice => prevprice + foundProduct.price)
            setTotalQuantity(prev => prev + 1)
        } else if (value === "dec") {
            if (foundProduct.quantity > 1) {
                setCartItems([
                    ...newCartItems.slice(0, index),
                    { ...foundProduct, quantity: foundProduct.quantity - 1 },
                    ...newCartItems.slice(index)
                ]);
                setTotalPrice(prevprice => prevprice - foundProduct.price)
                setTotalQuantity(prev => prev - 1)
            }
        }

    }

    return (
        <Context.Provider
            value={{ showCart, cartItems, setCartItems, setTotalPrice, setTotalQuantity, totalPrice, totalQuantity, qty, setQty, onRemove, incQty, decQty, onAdd, setShowCart, toggleCartItemQuantity }}
        >
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context)