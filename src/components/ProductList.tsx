import React from 'react';
import {Image, View} from 'react-native';
import {Product} from "@/interfaces/product/Product";
import ProductItem from "@/components/ProductItem";
import {productList} from "@/styles/components/productList";

interface ProductsProps {
    products: Product[];
}


const ProductList = ({products}: ProductsProps) => {
    return (
        <View style={productList.product_list}>
            {products.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </View>
    );
};


export default ProductList;
