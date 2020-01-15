const initialState = (window.Cypress && window.initialState) || [
  {id:"1",status:'unknown'}
];

export default function gallery(state = initialState, action) {
    return state;
};
