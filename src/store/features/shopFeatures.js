import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosPrivate } from '../../axios/axiosPrivate'

const initialState = {
  products: [],
  loading: false
}

const getProducts = createAsyncThunk(
  'shop/getProducts',
  async () => {
    const res = await axiosPrivate.get('/shops') 
    return res.data
})

const shopSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.loading = true
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.products = payload
        },
        [getProducts.rejected]: (state) => {
            state.loading = false
        },
    },
  })
  
 const shopReducer = shopSlice.reducer
 
 export {
    getProducts,
    shopReducer,
    shopSlice
 }