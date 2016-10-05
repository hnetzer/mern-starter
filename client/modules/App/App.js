import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// Import Actions
import { toggleAddPost } from './AppActions'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isMounted: false }
  }

  componentDidMount() {
    this.setState({isMounted: true}) // eslint-disable-line
  }

  handleToggleClick = () => {
    this.props.dispatch(toggleAddPost())
  };

  render() {
    return (
      <div>
        <h3>Hello World!</h3>
        <button onClick={this.handleToggleClick}>Toggle</button>
        <label>value:</label>{this.props.toggle === true ? 'true' : 'false'}
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    toggle: state.app.toggle,
  }
}

export default connect(mapStateToProps)(App)
