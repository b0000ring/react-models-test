import store from './'

class Provider {
  dispatch(action) {
    store.dispatch(action)
  }

  // here must be memoization (?)
  subscribe(callback, part) {
    return store.subscribe(() => {
      callback(store.getState()[part])
    })
  }

  getState(part) {
    return store.getState()[part]
  }
}

export default new Provider()