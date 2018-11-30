import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Heading } from 'grommet';
import Page from '../../components/page';
import Taskboard from '../../components/task-board';
import GoalsBoard from '../../components/goals/goal-board';
import { getScreenSizeState } from '../../../modules/selectors';
import CenterModal from '../../components/center-modals';

class Dashboard extends PureComponent {
  render() {
    const { screenSize } = this.props;
    const isDesktopSize = screenSize !== 'small' && screenSize !== 'xsmall';
    console.log(screenSize, 'screenSize', isDesktopSize);
    return (
      <Page id="dashboard" title="Dashboard" noCrawl>
        <Box flex direction="row">
          {isDesktopSize && (
            <Box
              gridArea="sidebar"
              background="dark-5"
              style={{ width: '40%', maxWidth: '400px' }}
              animation={[
                { type: 'slideRight', size: 'xlarge', duration: 1000 },
              ]}
            >
              <Box flex direction="column">
                <Box flex align="center">
                  <Heading margin="small">Goals</Heading>
                  <GoalsBoard />
                </Box>
              </Box>
            </Box>
          )}
          <Box
            gridArea="sidebar"
            style={{ width: '60%', display: 'inline-block' }}
            animation={[{ type: 'slideLeft', size: 'xlarge', duration: 1000 }]}
            flex
            align="center"
            justify="center"
            direction="column"
          >
            <Heading margin="xsmall">Weekly Taskboard</Heading>
            <Taskboard />
          </Box>
        </Box>
        <CenterModal />
      </Page>
    );
  }
}

Dashboard.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  screenSize: getScreenSizeState(state),
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);

/*


*/
