import * as types from '../constants/ActionTypes';

export const love = id => {
    console.log({ type: types.LOVE, id })
    return { type: types.LOVE, id };
};
export const hate = id => {
    console.log({ type: types.HATE, id })
    return { type: types.HATE, id };
};
export const select = id => {
    console.log({ type: types.SELECT, id })
    return { type: types.SELECT, id };
};

