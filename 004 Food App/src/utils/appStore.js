import  { createReducer, configureStore } from "@reduxjs/toolkit"

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default appStore;