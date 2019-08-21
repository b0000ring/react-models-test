class Model {

  storeConnection = null
  updateView = null

  // method that describes store connection
  subscribeToStore() {
    throw new Error('using default subscribeToStore method of Model')
  }
  // method that allows to unsubscribe from store updates
  unsubscribeFromStore() {
    throw new Error('using default unsubscribeFromStore method of Model')
  }
 
  // method that allows to get all items of current model
  async getAll() {
    throw new Error('using default getAll method of Model')
  }

  // method that allows to get items that matching parameters
  async getByParams(params) {
    throw new Error('using default getByParams method of Model')
  }
}

export default Model