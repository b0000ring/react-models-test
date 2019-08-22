class Model {
  // property that contains params description
  // key - param name 
  // value - object with rules (object keys: type, regexp, maxLength, maxValue, isRequired)
  params = {}
  // property that contains store unsubscribe function
  storeUnsubscribe = null
  // property that contains view update function
  updateView = null
  data = null

  // method that describes store connection
  subscribeToStore() {
    throw new Error('using default subscribeToStore method of Model')
  }

  // method that allows to unsubscribe from store updates
  unsubscribeFromStore() {
    this.storeUnsubscribe()
  }

  // method that allows to get all key of items for current model
  getKeys() {
    throw new Error('using default getAll method of Model')
  }

  // method that allows to get item by it's pk for current model
  getByPk(key) {
    throw new Error('using default getByParams method of Model')
  }

  // store update callback
  onStoreUpdate = (state) => {
    throw new Error('using default onStoreUpdate method of Model')
  }

  // method that allows to save model changes
  save() {
    throw new Error('using default save method of Model')
  }

  // method that allows to check - is all model params correct
  validate() {
    // there must be default validate mehtod code
  }
}

export default Model