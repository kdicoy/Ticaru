import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Grommet, Heading, ResponsiveContext, Text, Button, Tabs, Tab, FormField, TextInput } from 'grommet'
import { breakPoints, headerTheme } from './themes'
import { Attraction, Car, CircleInformation, Currency, TreeOption } from 'grommet-icons'

const links = [
  {
    to: '/',
    text: 'Homepage'
  },
  {
    to: '/about',
    text: 'About'
  },
  {
    to: '/profile/1',
    text: 'Profile 1'
  },
  {
    to: '/profile/2',
    text: 'Profile 2'
  },
  {
    to: '/login',
    text: 'Login',
    auth: false
  },
  {
    to: '/dashboard',
    text: 'Dashboard',
    auth: true
  },
  {
    to: '/logout',
    text: 'Logout',
    auth: true
  },
  {
    to: '/this-is-broken',
    text: 'Broken Page'
  }
]

const isCurrent = (to, current) => {
  if (to === '/' && current === to) {
    return true
  } else if (to !== '/' && current.includes(to)) {
    return true
  }

  return false
}

const HeaderLink = ({ to, text, current }) => (
  <Tab
    className={isCurrent(to, current) ? 'current' : ''}
    title={
      <Link to={to}>
        <RichTabTitle icon={<CircleInformation color="accent-1" />} label={text} />{' '}
      </Link>
    }
  />
)

const RichTabTitle = ({ icon, label }) => (
  <Box direction="row" align="center" gap="xsmall" margin="xsmall">
    {icon}
    <Text size="small">
      <strong>{label}</strong>
    </Text>
  </Box>
)

class HeaderClass extends React.Component {
  state = {}
  onActive = index => this.setState({ index })
  render() {
    const { index } = this.state
    const { isAuthenticated, current } = this.props
    return (
      <Grommet theme={breakPoints} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill background="brand">
              <Heading>Fragmatize</Heading>
              <Grommet theme={headerTheme}>
                <Tabs>
                  {links.map((link, index) => {
                    const TheLink = <HeaderLink key={index} current={current} {...link} />

                    if (link.hasOwnProperty('auth')) {
                      if (link.auth && isAuthenticated) {
                        return TheLink
                      } else if (!link.auth && !isAuthenticated) {
                        return TheLink
                      }

                      return null
                    }

                    return TheLink
                  })}
                </Tabs>
              </Grommet>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    )
  }
}

export default HeaderClass
