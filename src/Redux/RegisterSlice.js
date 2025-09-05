import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";




export const register = createAsyncThunk('register', async (values) => {
    let { data } = await axios.post('https://dummyjson.com/users/add', values)
    return data;

})

const RegisterSlice = createSlice({
    name: 'register',
    initialState: { newUserData: [], loading: false, error: null },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false;
            state.newUserData = action.payload;
            toast.success('Register Successfully',{position:"top-center"})

        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.newUserData=[];
            state.errors='incorrect email or password'
        })
    }
})

export default RegisterSlice.reducer;

