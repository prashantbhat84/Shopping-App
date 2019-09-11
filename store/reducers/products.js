import Products from '../../data/dummy-data';
const initialState = {
  availableProducts: Products,
  userProducts: Products.filter(product => product.ownerid === 'u1')
};
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
