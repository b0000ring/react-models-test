import React from 'react'

export default function view(Component, connectModel) {
  return class View extends React.Component {

    constructor() {
      super()
      this.model = connectModel(this.forceUpdate.bind(this))
    }

    componentWillUnmount() {
      // maybe it's bad decision, need to think more
      this.model.unsubscribeFromStore()
      this.model.updateView = null
    }

    render() {
      return <Component model={this.model} {...this.props} />
    }
  }
}