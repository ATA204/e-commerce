import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export let myCategories = createAsyncThunk('myCategories', async () => {
    let response = await axios.get('https://dummyjson.com/products/categories');

    return response.data
})

let CategorySlice = createSlice({
    name: 'categories',
    initialState: { categories: [], error: null, loading: false },
    extraReducers: (builder) => {
        builder.addCase(myCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.loading = false

        })
        builder.addCase(myCategories.pending, (state, action) => {

            state.loading = true

        })
        builder.addCase(myCategories.rejected, (state, action) => {

            state.loading = false;
            // state.error = action.payload.error

        })

    }
})

export default CategorySlice.reducer
