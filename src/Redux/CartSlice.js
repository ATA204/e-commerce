import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        Loading: false,
        TotalPrice: 0,
        TotalProPrice: 0,
        finalPrices: []
    },
    reducers: {
        addtoCart(state, action) {
            const existingIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (existingIndex >= 0) {
                state.cartItems[existingIndex].quantity += 1;
                toast.info(`Increased ${state.cartItems[existingIndex]?.title?.split(' ').slice(0, 2).join(' ')} quantity`, {
                    position: "bottom-left",
                });
            }
            else {
                let temp = { ...action.payload, quantity: 1 }
                state.cartItems.push(temp)
                toast.success(`${action.payload?.title?.split(' ').slice(0, 2).join(' ')} added to cart`, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1

                toast.info(`Decreased ${state?.cartItems[itemIndex]?.title?.split(' ').slice(0, 2).join(' ')} quantity`, {
                    position: "bottom-left",
                })

            }
            else if (state.cartItems[itemIndex].quantity === 1) {
                state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
                toast.error(`${action.payload?.title?.split(' ').slice(0, 2).join(' ')} removed from cart `, {
                    position: "bottom-left",
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

        removeCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            toast.error(`${action.payload?.title?.split(' ').slice(0, 2).join(' ')} removed from cart `, {
                position: "bottom-left",
            });
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },
        clearCart(state, action) {
            state.cartItems = []
            toast.error('Cart Cleared', {
                position: "bottom-left"
            })
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

        },

        handleTotalPrice(state, action) {
         
            // Calculate final price for each product and overall total
            let finalPrices = [];
            let overallTotal = 0;
            state.cartItems.forEach(product => {
                // Discounted price per unit
                const discountedPrice = product.price * (1 - (product.discountPercentage / 100));
                // Total for this product
                const productTotal = discountedPrice * product.quantity;
                finalPrices.push({
                    id: product.id,
                    title: product.title,
                    total: productTotal,
                    quantity: product.quantity,
                    discountedPrice: discountedPrice
                });
                overallTotal += productTotal;
            });
            state.finalPrices = finalPrices;
            state.TotalPrice = overallTotal;
        }




    }
})

export default CartSlice.reducer

export const { addtoCart, decreaseCart, removeCart, clearCart, handleTotalPrice } = CartSlice.actions