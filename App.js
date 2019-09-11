import React, { useState } from 'react';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const rootReducer = combineReducers({
  products: productsReducer
});
const store = createStore(rootReducer);
const fetchedFonts = async () => {
  await Font.loadAsync({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [FontLoaded, setFontLoaded] = useState(false);
  if (!FontLoaded) {
    return (
      <AppLoading
        startAsync={fetchedFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
