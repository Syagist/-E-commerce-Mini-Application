import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CATEGORY_API} from "@/constants/AppConstants";
import {CategoryState} from "@/interfaces/category/Category";

const initialState: CategoryState = {
    categories: [],
    loading: false,
    error: null,
};

const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        try {
            const response = await fetch(CATEGORY_API);
            return await response.json();
        } catch (error) {
            throw Error('Failed to fetch categories');
        }
    }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Failed to fetch categories';
            });
    },
});

export default categorySlice.reducer;

export { fetchCategories };
