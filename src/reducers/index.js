import { FETCH_REQUEST, FETCH_SUCCESS } from '../constants/actionTypes'

// export default function reducer(state, action) {
//   switch(action.type) {
//     case ITEMS_LOADED:
//        return {items: action.payload}
//     default:
//        return {items: []}
//   }
// }


export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;
    case FETCH_SUCCESS: 
      return {...state, posts: action.payload};
    default:
      return state;
  }
}