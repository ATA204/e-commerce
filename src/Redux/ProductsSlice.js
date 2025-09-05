import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const myProducts=createAsyncThunk('myProducts', async()=>{
    let getProducts=await axios.get('https://dummyjson.com/products')
    return getProducts.data.products

})

const productsSlice=createSlice({
        name:'myProducts',
      initialState:{
        myproducts:null,
        loading:false,
        error:null,      },
    extraReducers:(builder)=>{
        builder.addCase(myProducts.pending,(state)=>{
            state.loading=true
            state.myproducts=[]
        })
        builder.addCase(myProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.myproducts=action.payload
            
            
        })
        builder.addCase(myProducts.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })


    },
   
    


    
})
    export default productsSlice.reducer
