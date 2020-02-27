import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions';
import * as types from '../constants/ActionTypes';
import fetchMock from 'fetch-mock';

const mockStore = configureMockStore([thunk]);

describe('sum', () => {
  it('should handle 2+2', () => {
    expect(2+2).toEqual(4);
  });
});
/*
describe('async actions', () => {
    afterEach(() => { fetchMock.restore()} );

    it(`creates FETCH_TODOS_SUCCESS when 
        fetching todos has been done`, () => {
        fetchMock.getOnce('/hello', {
            body: { message: "Hello  test world"},
            headers: { 'content-type': 'application/json' }
        });

    const expectedActions = [
        {type: types.FETCH_HELLO_REQUEST},
        //{type: types.FETCH_HELLO_RESPONSE},
///      { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
    ]

    //const store = mockStore({ todos: [] })
    const store = mockStore({});
    console.log('store in test : ',store);
    console.log('store actions in test : '
        ,store.getActions()
    );
    //return store.dispatch(actions.fetchTodos()).then(() => {
    return store
        //.dispatch(actions.fetchHelloResponseReducer())
        .dispatch(actions.fetchHelloRequest())
        .then(()=>{
            expect(store.getActions())
            .toEqual(expectedActions);    
        });
//      // return of async actions
//      expect(store.getActions()).toEqual(expectedActions)
//    })
    })
})
*/
