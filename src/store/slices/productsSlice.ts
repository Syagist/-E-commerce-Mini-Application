import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ProductState} from "@/interfaces/product/Product";
import {PRODUCTS_API} from "@/constants/AppConstants";

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

const fetchProductsByQuery = createAsyncThunk(
    'products/fetchProductsByQuery',
    async ({query = ''}: ProductSearchQuery) => {
        try {
            const response = await fetch(PRODUCTS_API + `/search?q=${query}`);
            const data = await response.json();
            return data.products;
        } catch (error) {
            throw Error('Failed to fetch products');
        }
    }
);

interface ProductCategoryQuery {
    category?: string,
    limit?: number
}

interface ProductSearchQuery {
    query?: string,
}

const fetchProductsByCategory = createAsyncThunk(
    'products/fetchProducts',
    async ({category = '', limit = 4}: ProductCategoryQuery) => {
        try {
            const response = await fetch(PRODUCTS_API + '/category/' + category + '?limit=' + limit);
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
            .addCase(fetchProductsByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch products';
            })
            .addCase(fetchProductsByQuery.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsByQuery.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsByQuery.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch products';
            });
    },
});

export default productSlice.reducer;

export {fetchProductsByQuery, fetchProductsByCategory};
