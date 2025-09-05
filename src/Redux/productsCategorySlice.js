import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let categoryProducts = createAsyncThunk('categoryProducts', async (category) => {
    let response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    return response.data.products


})

let categoryProductsSlice = createSlice({
name:' categoryProducts',
initialState:{
    allcategoryProducts:null,
    loading:false,
    error:null
},
extraReducers:(builder)=>{
    builder.addCase(categoryProducts.fulfilled,(state,action)=>{
        state.allcategoryProducts=action.payload
        state.loading=false
    })
    builder.addCase(categoryProducts.pending,(state,action)=>{
        state.loading=true
    })
    builder.addCase(categoryProducts.rejected,(state,action)=>{
        state.loading=false
        state.error='something went wrong'
    })
}
})

export default categoryProductsSlice.reducer