import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()
export default function CartProvider({children}) {
    const [Cart, setCart] = useState([])
    const [itemsAmount, setItemsAmount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const CalculatTotal = Cart.reduce((value, item) =>{
            return value + (item.price * item.amount)
        }, 0)
        setTotal(CalculatTotal)
    })
    

    useEffect(()=>{
        if (Cart) {
            const Amount = Cart.reduce((value, item) =>{
                return value + item.amount
            }, 0)
            setItemsAmount(Amount)
        }
    }, [Cart])

    const addToCart = (product ,id) =>{
        const newItem = { ...product, amount: 1 };
        const cartItem = Cart.find((item) =>
            (item.id === id)
        );
        if (cartItem) {
            const newCart = Cart.map((item) =>{
                if (item.id === id) {
                    return {...item, amount:cartItem.amount+1}
                }else{
                    return {...item};
                }
            });
            setCart([...newCart])
        }else{
            setCart([...Cart, newItem])
        }
    };

    const removeItem = (productId) =>{
        const newCart = Cart.filter((item) =>{
            return item.id !== productId
        })
        setCart(newCart)
    }

    const clearCart = () =>{
        setCart([])
    }
    const increment = (productId) =>{
        const Item = Cart.find(item => item.id === productId)
        addToCart(Item, productId)
    }
    const decrement = (productId) =>{
        const Item = Cart.find((item) =>{ 
            return item.id === productId
        })
        if (Item) {
            const newCart = Cart.map(item =>{
                if (item.id === productId) {
                    return {...item, amount : Item.amount - 1}
                }else{
                    return {...item}
                }
            })
            setCart(newCart)
        }
        if (Item.amount < 2) {
            removeItem(productId)
        }
    }
  return (
    <CartContext.Provider value={{Cart, addToCart , removeItem, clearCart, increment, decrement, itemsAmount, total}}>
        {children}
    </CartContext.Provider>
  )
}
