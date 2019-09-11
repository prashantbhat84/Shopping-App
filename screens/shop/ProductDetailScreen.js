import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = props => {
  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(product => product.id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
      <Text>{productId}</Text>
    </View>
  );
};
ProductDetailScreen.navigationOptions = navdata => {
  return {
    headerTitle: navdata.navigation.getParam('productTitle')
  };
};

const styles = StyleSheet.create({});
export default ProductDetailScreen;
