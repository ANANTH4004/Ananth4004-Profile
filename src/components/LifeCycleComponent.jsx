import React from 'react'
class LifeCycleComponent extends React.Component {
  constructor() {
    //used to set the initail state
    // used to bind the event handlers
    console.log('Constructor')
    super()
    this.state = {
      count: 0,
      name: 'React',
    }
    this.increment = this.increment.bind(this)
  }

  increment() {
    console.log('Increment method')
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  //componentDidMount is used to fetch data from API
  componentDidMount() {
    console.log('Component Did Mount')
    setTimeout(() => {
      this.setState({ name: 'React JS' })
    }, 2000)
  }

  //componentDidUpdate is used to update the state
  // wont be called on initial render
  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update', prevProps, prevState)
  }

  //render method is required one
  // render method should be pure means it should not modify the state
  render() {
    console.log('Render Method', this.state)
    return (
      <>
        <h1 className="text-green-600"> Component Life Cycle Render</h1>
        <button onClick={this.increment}>Increment</button>
      </>
    )
  }
}

export default LifeCycleComponent
