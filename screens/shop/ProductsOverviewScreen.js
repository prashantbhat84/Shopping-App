import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};
ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'Products Overview'
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
