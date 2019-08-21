import React from 'react'

export default function view(Component, model) {
  return class View extends React.Component {

    constructor() {
      super()
      model.updateView = this.forceUpdate
    }

    componentWillUnmount() {
      // maybe it's bad decision, need to think more
      model.unsubscribeFromStore()
    }

    render() {
      return <Component model={model} {...this.props} />
    }
  }
}