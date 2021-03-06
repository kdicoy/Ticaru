// The basics
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

// Action creators and helpers
import { Grommet, ResponsiveContext, Box } from 'grommet';
import { establishCurrentUser } from '../modules/auth';
import { isServer } from '../store';

import Header from './Header';
import Routes from './routes';
import theme from './themes';
import { setScreenSize } from '../modules/actions/general';

class App extends Component {
  componentWillMount() {
    const { establishCurrentUser } = this.props;
    if (!isServer) {
      establishCurrentUser();
    }
  }

  render() {
    const { setScreenSize, isAuthenticated, location } = this.props;
    return (
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => {
            setScreenSize(size);
            return (
              <React.Fragment>
                <Box style={{ height: '100%', width: '100%' }} id="container">
                  <Header
                    size={size}
                    isAuthenticated={isAuthenticated}
                    current={location.pathname}
                  />
                  <Routes />
                </Box>
              </React.Fragment>
            );
          }}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = { establishCurrentUser, setScreenSize };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

App.propTypes = {
  setScreenSize: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({}).isRequired,
  establishCurrentUser: PropTypes.func.isRequired,
};
