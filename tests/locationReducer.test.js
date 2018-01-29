import reducer from '../reducers' ;
import initialState from '../store/initialState'
import * as types from '../actions/actionTypes'

describe('Location reducer', () => {

    test('default action', () => {
      const stubAction = {
        type: 'default',
      };
  
      const actualStore = reducer(undefined, stubAction);

      expect(actualStore)
        .toEqual(initialState);
    });

    test('LOAD_FROM_STORAGE', () => {
        const stubAction = {
          type: types.LOAD_FROM_STORAGE,
          payload: {
              locations: [{name: '123'}, {name: '321'}]
          }
        };
        const actualStore = reducer(undefined, stubAction);
        expect(actualStore.locations.length)
          .toEqual(2);
      });

      test('LOAD_FROM_STORAGE without null and undefined', () => {
        const stubAction = {
          type: types.LOAD_FROM_STORAGE,
          payload: {
              locations: [{name: '123'}, {name: '321'}, null, undefined]
          }
        };
        const actualStore = reducer(undefined, stubAction);
        expect(actualStore.locations.length)
          .toEqual(2);
      });

      test('ADD_LOCATION ', () => {
        const stubAction = {
          type: types.ADD_LOCATION,
          payload: {
              locations: [{name: '123'}]
          }
        };
        const actualStore = reducer(undefined, stubAction);
        expect(actualStore.locations.length)
          .toEqual(1);
      });

      test('add note', () => {
        const stubAction = {
          type: types.UPDATE_LOCATION,
          payload: {
              name: '123', note: 'test'
          }
        };
        const actualStore = reducer({locations : [{name: '123'}] }, stubAction);
        expect(actualStore.locations[0])
          .toEqual({name: "123", note: "test"});
      });


      test('merge loaded data', () => {
        const stubAction = {
          type: types.LOAD_LOCATIONS_SUCCESS,
          payload: [{name: '123'}, {name: "345"}]
        };
        const actualStore = reducer({locations : [{name: '123', note: "test"}] }, stubAction);
        expect(actualStore.locations.length)
          .toEqual(2);
        expect(actualStore.locations[0])
          .toEqual({name: "123", note: "test"});
      });

    
});