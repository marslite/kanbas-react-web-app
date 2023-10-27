import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    message: "Hello World eeh",
    txt: "hello 2"
};



const helloSlice = createSlice({
    name: "hello",
    initialState,
    reducers: {},

});

export default helloSlice.reducer;