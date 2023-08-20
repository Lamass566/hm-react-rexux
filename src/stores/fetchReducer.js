import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    datas: []
}

export const fetchData = createAsyncThunk('data/fetchData', () => {
    return axios
    .get('api/data.json')
    .then((resD) => resD.data['products'])
    
})
const prodSlice = createSlice({
    name: 'data',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.datas = action.payload
            })
            .addCase(fetchData.rejected, (state, action) => {
                console.log(action)
            })
    },
})

export default prodSlice.reducer