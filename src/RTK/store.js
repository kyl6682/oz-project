import {configureStore} from '@reduxjs/toolkit'
import { productSlice } from './slice'

export const store = configureStore({
    reducer : {
        product: productSlice.reducer
    }
})