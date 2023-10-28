import { createSlice } from "@reduxjs/toolkit";
// I created txt for testing purposes 
const initialState = {
    message: "Hello World",
    txt: "hello 2",
};



const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {},

});

export default helloSlice.reducer;