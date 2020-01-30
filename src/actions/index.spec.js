import * as types from '../constants/ActionTypes';
import * as actions from './index';

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
