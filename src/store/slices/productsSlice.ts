import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductState} from "@/interfaces/product/Product";
import {PRODUCTS_API} from "@/constants/AppConstants";

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const response = await fetch(PRODUCTS_API);
            const data = await response.json();
            return data.products;
        } catch (error) {
            throw Error('Failed to fetch products');
        }
    }
);

const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProducts',
    async (category: string) => {
        try {
            const response = await fetch(PRODUCTS_API + '/category/' + category);
            const data = await response.json();
            return data.products;
        } catch (error) {
            throw Error('Failed to fetch products');
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch products';
            });
    },
});

export default productSlice.reducer;

export {fetchProducts, fetchProductsByCategory};
