import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Import Actions
import { fetchIncrementCounter, fetchCount } from './CounterActions'

export class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  componentDidMount = () => {
    this.props.dispatch(fetchCount())
  }

  incrementCounter = () => {
    this.props.dispatch(fetchIncrementCounter())
  }

  render() {
    return (
      <div>
        <h3>Counter</h3>
        <button onClick={this.incrementCounter}>Increment</button>
        <label>count:</label>{this.props.count}
      </div>
    )
  }
}

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    count: state.counter.count,
  }
}

export default connect(mapStateToProps)(Counter)
