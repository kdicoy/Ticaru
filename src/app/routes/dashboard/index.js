import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Page from "../../components/page";
import { Box, Button, Text, Heading } from "grommet";
import WeeklyBoard from "../../components/weekly-board";
import GoalsBoard from "../../components/goals/goal-board";
import { getScreenSizeState } from "../../../modules/selectors";
import CenterModal from "../../components/center-modals";
class Dashboard extends PureComponent {
  render() {
    const { screenSize } = this.props;
    const isDesktopSize = screenSize !== "small" && screenSize !== "xsmall";
    console.log(screenSize, "screenSize", isDesktopSize);
    return (
      <Page id="dashboard" title="Dashboard" noCrawl>
        <CenterModal />
        <Box flex direction="row">
          {isDesktopSize && (
            <Box
              gridArea="sidebar"
              background="dark-5"
              style={{ width: "40%", padding: "20px" }}
              animation={[
                { type: "fadeIn", duration: 300 },
                { type: "slideRight", size: "xlarge", duration: 150 }
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
          <Box flex direction="column">
            <Box flex align="center" justify="center">
              <WeeklyBoard />
            </Box>
          </Box>
        </Box>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  screenSize: getScreenSizeState(state)
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);

/*


*/
