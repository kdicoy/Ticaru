import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Page from "../../components/page";
import { Box, Button, Text, Heading } from "grommet";
//import ParticleEffectButton from 'react-particle-effect-button'
import WeeklyBoard from "../../components/weekly-board";
//import WizardForm from '../../components/new-task-form/WizardForm'
class Dashboard extends PureComponent {
  render() {
    //const { currentUser } = this.props
    return (
      <Page id="dashboard" title="Dashboard" noCrawl>
        <Box flex direction="row">
          <Box
            gridArea="sidebar"
            background="dark-5"
            style={{ width: "30%" }}
            animation={[
              { type: "fadeIn", duration: 300 },
              { type: "slideRight", size: "xlarge", duration: 150 }
            ]}
          >
            <Box flex direction="column">
              <Box flex align="center">
                <Heading margin="small">Goals</Heading>
              </Box>
            </Box>
          </Box>
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
  currentUser: state.auth.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Dashboard);

/*


*/
