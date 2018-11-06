// The basics
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

// Action creators and helpers
import { establishCurrentUser } from '../modules/auth'
import { isServer } from '../store'

import Header from './header'
import Routes from './routes'
import { breakPoints } from './themes'
import { Grommet, ResponsiveContext, Box } from 'grommet'

import './app.css'

class App extends Component {
  componentWillMount() {
    if (!isServer) {
      this.props.establishCurrentUser()
    }
  }

  render() {
    return (
      <Grommet theme={breakPoints} full>
        <ResponsiveContext.Consumer>
          {size => (
            <React.Fragment>
              <Box id="content" style={{height: '100%', width: '100%'}} id="container">
              <Header size={size} isAuthenticated={this.props.isAuthenticated} current={this.props.location.pathname} />
              <div>
              <Routes />
              </div>
              </Box>
            </React.Fragment>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

const mapDispatchToProps = dispatch => bindActionCreators({ establishCurrentUser }, dispatch)

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
