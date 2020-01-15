import gallery from './gallery';
import * as types from '../constants/ActionTypes';

describe('gallery reducer', () => {
  it('should handle initial state', () => {
    expect(
      gallery(undefined, {})
    ).toEqual([
      {id:"1",status:'unknown'},
      {id:"2",status:'unknown'},
      {id:"3",status:'unknown'},
      {id:"4",status:'unknown'},
      {id:"5",status:'unknown'},
      {id:"6",status:'unknown'},
      {id:"7",status:'unknown'},
    ]);
  });

  it('should handle LOVE', () => {
    expect(
      gallery([{id:"1",status:'unknown'}], {
        id: "1",
        type: types.LOVE
      })
    ).toEqual([
      {
        id: "1",
        status:"Love"
      }
    ]);
  });

  it('should handle HATE', () => {
    expect(
      gallery([{id:"1",status:'unknown'}], {
        id: "1",
        type: types.HATE
      })
    ).toEqual([
      {
        id: "1",
        status:"Hate"
      }
    ]);
  });

});
