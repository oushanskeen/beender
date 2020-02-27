import * as types from '../constants/ActionTypes';
import * as actions from './index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
const mockStore = configureMockStore([thunk]);

describe('async gallery actions',()=>{
    afterEach(()=>{
        fetchMock.restore();
    });

    it(`creates FETCH_GALLERY_RESPONSE 
        when fetching gallery has been done`,()=>{
        fetchMock.getOnce('http://localhost:3001/gallery',{
            data: {gallery:['content']},
            headers: {'content-type':'application/json'}
        });
        
        const expectedActions = [
            { type: 'FETCH_GALLERY_REQUEST' },
            {
              type: 'FETCH_GALLERY_RESPONSE',
              body: {
                   data: {gallery:['content']},
                   headers: { 'content-type': 'application/json' }
              }
            },
            {
              type: 'FETCH_GALLERY_FAILURE',
              ex: { 
                type: 'FETCH_GALLERY_RESPONSE', 
                body: {
                   data: {gallery:['content']},
                   headers: { 'content-type': 'application/json' }
                }
              }
            }
        ];        

        const store = mockStore({gallery:[]});  

        return store.dispatch(actions.fetchGallery())
        .then(()=>{
            console.log('getActions: ', store.getActions());
            console.log('expActions: ', expectedActions);
            expect(store.getActions())
            .toEqual(expectedActions)        
        });
    });
});



/*
describe('welcome actions', () => {
  it('Fetch_hello should create FETCH_HELLO action', () => {
    expect(actions.fetch_hello('Hello world!')).toEqual({
      type: types.FETCH_HELLO,
      data:'Hello world!'
    });
  });
});
*/

describe('gallery actions', () => {
  it('Love should create LOVE action', () => {
    expect(actions.love(1)).toEqual({
      type: types.LOVE,
      id: 1
    });
  });

  it('Hate should create HATE action', () => {
    expect(actions.hate(2)).toEqual({
      type: types.HATE,
      id: 2
    });
  });
  /*  
  it('FGRq should create FETCH_GALLERY_REQUEST action', () => {
    expect(actions.fetchGalleryRequest()).toEqual({
      type: types.FETCH_GALLERY_REQUEST
    });
  });
  it('FGRs should create FETCH_GALLERY_RESPONSE action', 
    (data) => {
        expect(actions.fetchGalleryResponse(data)).toEqual({
            type: types.FETCH_GALLERY_RESPONSE, data
        });
  });
  */ 
});

describe('choice actions', () => {
  it('Select should create SELECT action', () => {
    expect(actions.select(1)).toEqual({
      type: types.SELECT,
      id: 1
    });
  });
});

describe('selection actions', () => {
    it('Selected component should create DESELECT action for "No" button',()=>{
        expect(actions.deselect()).toEqual({
            type: types.DESELECT,
        })
    });
    it('Selected component should create OUTCOME action for "Yes" button',()=>{
        expect(actions.outcome(1)).toEqual({
            type: types.OUTCOME,
            id:1
        })
    });
});

describe('order actions', () => {
  it('Home should create HOME action', () => {
    expect(actions.home()).toEqual({
      type: types.HOME
    });
  });
});

