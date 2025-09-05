import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let searchProducts = createAsyncThunk('searchProducts', async (searchKey) => {
    let response = await axios.get(`https://dummyjson.com/products/search?q=${searchKey}`)
    return response.data

})
let searchSlice = createSlice({
    name: 'search',
    initialState: {
        allsearchProducts: [],
        loading: false,
        error: null

    },
    extraReducers: (builder) => {
        builder.addCase(searchProducts.fulfilled, (state, action) => {
            state.allsearchProducts = action.payload.products
            
            state.loading = false
        })
        builder.addCase(searchProducts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(searchProducts.rejected, (state, action) => {
            state.loading = false
            state.error='something went wrong'
        })
    }
})

export default searchSlice.reducer