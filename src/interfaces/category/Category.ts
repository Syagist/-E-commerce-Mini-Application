export interface Category {
    name: string;
}

export interface CategoryProps {
    category: string;
}

export interface CategoryState {
    categories: string[];
    loading: boolean;
    error: string | null;
}