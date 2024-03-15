import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '@/styles/globalStyles';
import Banner from '@/components/Banner';
import {fetchProductsByCategory} from "@/store/slices/productsSlice";
import {RootState, useAppDispatch, useAppSelector} from "@/store/store";
import {fetchCategories} from "@/store/slices/categoriesSlice";
import ProductList from "@/components/product/ProductList";
import {home} from "@/styles/sreens/home";


const Home = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state: RootState) => state.categories.categories);
    const [categoriesWithProducts, setCategoriesWithProducts] = useState({});

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            categories.forEach(async (category) => {
                await dispatch(fetchProductsByCategory({category})).then(res => res.payload)
                    .then(async (res) => {
                        setCategoriesWithProducts((prevState) => ({
                            ...prevState,
                            [category]: res,
                        }));
                    });

            });
        };
        fetchData()
    }, [dispatch, categories]);

    const onLoadProduct = () => {

    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={globalStyles.container}>
                <Banner/>
                {Object.keys(categoriesWithProducts).map((category, index) => (
                    <View style={home.category_wrapper} key={index}>
                        <View style={home.category_title_button}>
                            <Text style={home.category_title}>{category}</Text>
                            <TouchableOpacity  onPress={onLoadProduct}>
                                <Text style={home.category_button}>see all</Text>
                            </TouchableOpacity>
                        </View>
                        <ProductList products={categoriesWithProducts[category]} />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Home;