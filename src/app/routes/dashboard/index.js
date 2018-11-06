import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Page from '../../components/page'
import { Box } from 'grommet'
//import ParticleEffectButton from 'react-particle-effect-button'
import WeeklyBoard from '../../components/weekly-board';
//import WizardForm from '../../components/new-task-form/WizardForm'
class Dashboard extends PureComponent {
  render() {
    //const { currentUser } = this.props
    return (
      <Page id="dashboard" title="Dashboard" noCrawl>
        <Box flex direction="column">
          <Box flex align="center" justify="center">
            <WeeklyBoard />
          </Box>
        </Box>
      </Page>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
})

export default connect(
  mapStateToProps,
  null
)(Dashboard)
