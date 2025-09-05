import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


let WishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        wishlistItems: localStorage.getItem('wishlistItems') ? JSON.parse(localStorage.getItem('wishlistItems')) : [],
        loading: false, error: null
    },
    reducers: {
        handleWishlist: (state, action) => {
            const existingIndex = state.wishlistItems.findIndex((item) => item.id === action.payload.id)

            if (existingIndex >= 0) {

                state.wishlistItems = state.wishlistItems.filter((item) => item.id !== action.payload.id)
                toast.error(`${action.payload?.title?.split(' ').slice(0, 2).join(' ')} removed from favourites`, {
                    position: "bottom-left",
                });
                localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems))
            }
            else {

                state.wishlistItems.push(action.payload)

                toast.success(` ${action.payload?.title?.split(' ').slice(0, 2).join(' ')} added to favourites`, {
                    position: "bottom-left",
                });
                localStorage.setItem('wishlistItems', JSON.stringify(state.wishlistItems))
            }

        }
    }
})

export const { handleWishlist } = WishlistSlice.actions;
export default WishlistSlice.reducer
