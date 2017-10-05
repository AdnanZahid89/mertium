const ITEMS_LOADED = 'ITEMS_LOADED'

const loadItems = () => {
  return (dispatch) => {
    fetch('http://ec2-34-224-85-19.compute-1.amazonaws.com:8000/get_feeds/').then(data => dispatch(itemsLoaded(data)))
  }
}

function itemsLoaded(data) {
  return {type: ITEMS_LOADED, payload: data}
}

