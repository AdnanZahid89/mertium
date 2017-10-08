// import {ITEMS_LOADED} from '../constants/actionTypes';

// export const loadItems = () => {
//   return (dispatch) => {
//     //fetch('http://ec2-34-224-85-19.compute-1.amazonaws.com:8000/get_feeds/').then(data => dispatch(itemsLoaded(data)))
//     fetch('http://ec2-34-224-85-19.compute-1.amazonaws.com:8000/get_feeds/', {
//       mode: 'no-cors',
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//       },
//     },
//     ).then(response => {
//       if (response.ok) {
//         response.json().then(response => dispatch(itemsLoaded(response)));
//       }
//     });
//   } 
// }

// function itemsLoaded(response) {
// 	return {type: ITEMS_LOADED, payload: response}
// }

