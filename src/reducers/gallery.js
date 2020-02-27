import {
  LOVE,
  HATE,
  FETCH_GALLERY_RESPONSE
} from '../constants/ActionTypes'

const initialState = (window.Cypress && window.initialState) || 
[
  {id:"1",status:'unknown'},
  {id:"2",status:'unknown'},
  {id:"3",status:'unknown'},
  {id:"4",status:'unknown'},
  {id:"5",status:'unknown'},
  {id:"6",status:'unknown'},
  {id:"7",status:'unknown'},
];

export default function gallery(state = initialState, action) {
  switch (action.type) {
    case LOVE:
      return state.map(gallery => 
        (gallery.id === action.id 
            ? { ...gallery, status:"Love"} 
            : gallery)
        );
    case HATE:
      return state.map(gallery => 
        (gallery.id === action.id 
            ? { ...gallery, status:"Hate"} 
            : gallery)
        );
    case FETCH_GALLERY_RESPONSE:
        return state = action.body
    default:
      return state
  }
}
