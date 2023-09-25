import { configureStore } from "@reduxjs/toolkit";
import {userDetailsReducers} from './userDetailsSlice'
const store=configureStore({
    reducer:{
        userDetailsReducers

    }
})

export default store;