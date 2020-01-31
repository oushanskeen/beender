import order from './order';
import * as types from '../constants/ActionTypes';

describe('order reducer', () => {
  it('should handle HOME', () => {
    expect(
      order([{anyContent:"anyContent"}], {
        type: types.HOME
      })
    ).toEqual([{}]);
  });

});
