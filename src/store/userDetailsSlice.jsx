import { createSlice } from "@reduxjs/toolkit";

const userDetails=createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null
    },
    reducers:{

    }
})

export const userDetailsReducers= userDetails.reducer