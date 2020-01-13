import * as types from '../constants/ActionTypes'
import * as actions from './index'

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
