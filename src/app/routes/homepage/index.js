import React from 'react'
import Page from '../../components/page'
import { Grid, Box, Button, Text } from 'grommet'

export default () => (
  <Page id="homepage">
  <Grid
      fill
      areas={[
        { name: "main", start: [0, 0], end: [1, 0] }
      ]}
      columns={["small", "flex"]}
      rows={["flex"]}
      gap="small"
    >
      <Box gridArea="main" align="center" justify="center" style={{height: '500px'}}>
        <Text>The most effective way to stick to and achieve your goals</Text>
        <br/>
        <Button label="Get started today" onClick={() => {}} />
      </Box>
    </Grid>
  </Page>
)

