import {
  LOVE,
  HATE,
  FETCH_GALLERY_RESPONSE
} from '../constants/ActionTypes'

const sampleGalleryState = 
    [
      {
        id:"1",
        status:'unknown',
        eval:
        {
            "welcome": "grapes",
            "post-effect": "tears",
            "song": "Billy Eilish - When the party is over"
        }
      },
      {
        id:"2",
        status:'unknown',
        eval:
        {
            "welcome": "Jam",
            "post-effect": "Royal Dreams",
            "song": "Marina and the diamonds - Blue"
        }
      },
      {
        id:"3",
        status:'unknown',
        eval:
        {
            "welcome": "mosaic",
            "post-effect": "bit separated",
            "song": "Glass Heroes - You let me down"
        }
      },
      {
        id:"4",
        status:'unknown',
        eval:
        {
            "welcome": "farm flows",
            "post-effect": "grass & mold",
            "song": "Keep Off the grass - Your Neighbour"
        } 
      },
      {
        id:"5",
        status:'unknown',
        eval:
        {
            "welcome": "squirrel fairytales",
            "post-effect": "squirrel dreams",
            "song": "Alvin & The Chip Monks - Squeakuel" 
        }
      },
      {
        id:"6",
        status:'unknown',
        eval:
        {
            "welcome": "heavy sweat",
            "post-effect": "sinking in a deep",
            "song": "Sade - By your side"
        }
      },
      {
        id:"7",
        status:'unknown',
        eval:
        {
            "welcome": "questions",
            "post-effect": "more questions",
            "song": "Anya Marina - Whatever You Like" 
        }
      },
    ];

const initialState = (window.Cypress && window.initialState) || 
sampleGalleryState;

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
