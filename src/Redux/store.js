import { configureStore } from "@reduxjs/toolkit";
import registerReducer from './RegisterSlice'
import loginReducer from './LoginSlice'
import ProductsReducer  from './ProductsSlice'
import CategoryReducer from './categorySlice'
import ProductDetailsReducer from './ProductDetailsSlice'
import categoryProductsReducer from './productsCategorySlice'
import searchReducer from './SearchSlice'
import CartReducer from './CartSlice'



export default configureStore({
    reducer:{
         Register:registerReducer,
         login:loginReducer,
         products:ProductsReducer,
         categories:CategoryReducer,
         productdetails:ProductDetailsReducer,
         categoryProducts:categoryProductsReducer,
         search:searchReducer,
         cart:CartReducer

    }
})