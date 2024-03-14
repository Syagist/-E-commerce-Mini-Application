import {Product} from "@/interfaces/product/Product";

export type RootStackParamList = {
    ProductDetail: { product: Product } | undefined;
    Products: { category: string } | undefined;
};