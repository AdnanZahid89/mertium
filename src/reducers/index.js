import { ITEMS_LOADED } from '../constants/actionTypes'

export default function reducer(state, action) {
  switch(action.type) {
    case ITEMS_LOADED:
       return {items: action.payload}
    default:
       return {items: []}
  }
}