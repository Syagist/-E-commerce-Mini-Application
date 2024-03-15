import React from 'react';
import { View, Text} from 'react-native';
import {Product} from "@/interfaces/product/Product";
import ProductItem from "@/components/product/ProductItem";
import {productList} from "@/styles/components/product/productList";

interface ProductsProps {
    products: Product[];
}


const ProductList = ({products}: ProductsProps) => {
    if(!products || products.length === 0){
       return (
           <View style={productList.empty}>
               <Text>No prodcut found</Text>
           </View>
       )
    }
    return (
        <View style={productList.product_list}>
            {products.map((product) => (
                <ProductItem key={product.id} product={product}/>
            ))}
        </View>
    );
};


export default ProductList;
