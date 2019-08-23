class Model {
  // property that contains params description
  // key - param name 
  // value - array of objects with rules (object keys for example: type, regexp, maxLength, maxValue, isRequired)
  params = []
  // property that contains store unsubscribe function
  storeUnsubscribe = null
  // property that contains view update function
  updateView = null

  // method that describes store connection
  subscribeToStore() {
    throw new Error('using default subscribeToStore method of Model')
  }
  
  // method that allow apply params to model 
  applyParams(params) {
    for(let key in params) {
      this[key] = params[key]
    }
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
  // realization is simplified for example
  validate() {
    const errors = {}
    this.params.forEach((item) => {
      const value = this[item.name] || ''
      if(item.type === 'number' && !parseInt(value)) {
        errors[item.name] = 'not a number'
      }
      if(item.maxLength < value.length) {
        errors[item.name] = 'max length exceeded'
      }
      if(item.isRequired && !value) {
        errors[item.name] = 'field is required'
      }
    })
    if(Object.keys(errors).length) {
      return errors
    } else {
      return null
    }
  }
}

export default Model