import choice from './choice';
import * as types from '../constants/ActionTypes';

describe('choice reducer', () => {
  it('should handle SELECT', () => {
    expect(
      choice([{isSelected:" "}], {
        id: "1",
        type: types.SELECT
      })
    ).toEqual([{isSelected: "1"}]);
  });
});
