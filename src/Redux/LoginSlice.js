import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";





export const login = createAsyncThunk('login', async (values) => {
    let { data } = await axios.post('https://dummyjson.com/auth/login',values)
    return data

})

export const LoginSlice = createSlice({
    name: 'login',
    initialState: { userData:[],decodedData:null, loading: false ,errors:null},
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.userData = action.payload;
            console.log(action.payload);
            
            state.loading = false;
            state.errors='';
            state.decodedData=jwtDecode(action.payload.accessToken)
            console.log(state.decodedData);
            
            localStorage.setItem('dataToken',action.payload.accessToken)
            toast.success(`Welcome ${action.payload?.firstName}`,{position:"top-center"})


            

        })
        builder.addCase(login.pending, (state, action) => {
            state.loading = true

        })
        builder.addCase(login.rejected, (state, action) => {
                    state.loading = false
                    toast.error('Incorrect username or password',{position:"top-center"})
                    state.errors='incorrect email or password'


        })
    }
})
export default LoginSlice.reducer;
