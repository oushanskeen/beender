import gallery from './gallery';

describe('gallery reducer', () => {
  it('should handle initial state', () => {
    expect(
      gallery(undefined, {})
    ).toEqual([
        {id:"1",status:'unknown'}
    ]);
  });
});

