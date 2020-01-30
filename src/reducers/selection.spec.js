import selected from './selection';
import * as types from '../constants/ActionTypes';

describe('selected reducer', () => {
  it('should handle OUTCOME', () => {
    expect(
      selected([], {
        type: types.OUTCOME,
        id: "1"
      })
    ).toEqual([{outcome:"1"}]);
  });

});
