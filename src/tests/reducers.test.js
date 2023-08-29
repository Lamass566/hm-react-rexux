import formReducer from '../stores/formReducer'
import cartReducer from '../stores/cartReducer';
import fetchReducer from '../stores/fetchReducer';
import * as actions from '../stores/actions'


//formReducer
describe('formReducer', () => {

  it('should return the initial state', () => {
        expect(formReducer(undefined, {})).toEqual({form: 'hide'});
    });

  it('should handle SHOW', () => {
    const startAction = {
      type: actions.SHOW_FORM
    };
    
    expect(formReducer({}, startAction)).toEqual({form: 'show'});
  });
});


//cartReducer
describe('cartReducer', () => {

    it('should return the initial state', () => {
          expect(cartReducer(undefined, {})).toEqual({cart: []});
      });
  
    it('should handle ADD_TO_CART', () => {

      const card = {
        article: 12,
        id: 1,
        name: 'test',
        price: 300,
        url: 'test'
      }
      const successAction = {
              type: actions.ADD_TO_CART,
              payload: card, 
            };
      expect(cartReducer(undefined, successAction)).toEqual({cart: [card]});
    });
    it('should handle REMOVE_FROM_CART', () => {

      const card = {
        article: 12,
        id: 1,
        name: 'test',
        price: 300,
        url: 'test'
      }
      const successAction = {
              type: actions.REMOVE_FROM_CART,
              payload: card, 
            };
      expect(cartReducer(undefined, successAction)).toEqual({cart: []});
    });
  });

//fetchReducer
describe('fetchReducer', () => {

  it('should return the initial state', () => {
        expect(fetchReducer(undefined, {})).toEqual({datas: []});
    });

    const card = {
      article: 12,
      id: 1,
      name: 'test',
      price: 300,
      url: 'test'
    }

  it('should handle SHOW', () => {
    const startAction = {
      type: actions.SET_USERS,
      payload: card
    };
    
    expect(fetchReducer(undefined, startAction)).toEqual({datas: []});
  });
});
