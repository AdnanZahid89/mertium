import { ITEMS_LOADED } from '../actions/index'

export default function reducer(state, action) {
  switch(action.type) {
    case ITEMS_LOADED:
       return {items: action.payload}
    default:
       return {items: []}
  }
}