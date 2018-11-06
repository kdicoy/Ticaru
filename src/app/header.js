import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Heading, Box, Menu, Anchor } from 'grommet'
import { Menu as MenuIcon } from 'grommet-icons'
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

class HeaderClass extends React.Component {
  state = {}
  navigateRoute = route => {
    this.props.history.push(route)
  }
  mobileMenuReducer = (result, link) => {
    const { isAuthenticated } = this.props
    const TheLink = { label: <div style={{width: '100vw', padding: '5px'}}>{link.text}</div>, onClick: () => this.navigateRoute(link.to) }
    if (link.hasOwnProperty('auth')) {
      if (link.auth && isAuthenticated) {
        return [...result, TheLink]
      } else if (!link.auth && !isAuthenticated) {
        return [...result, TheLink]
      }

      return result
    }
    return [...result, TheLink]
  }
  renderFullScreen = () => {
    const { isAuthenticated, current } = this.props
    return (
      <Box direction="row" justify="between" align="stretch" elevation="medium" style={{padding: '50px'}}>
        <Box justify="center" align="start">
          <Heading align="center" color="brand" style={{ margin: '0' }}>
            Tracadence
          </Heading>
        </Box>
        <Box justify="center" align="stretch" alignContent="stretch">
          <Box direction="row" gap="xsmall">
            {links.map(link => {
              const TheLink = <Anchor key={link.to} color={isCurrent(link.to, current) ? 'neutral-2' : 'accent-1'} onClick={()=>this.navigateRoute(link.to)}>{link.text}</Anchor>
              
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
          </Box>
        </Box>
      </Box>
    )
  }

  renderHalfScreen = () => {
    return (
      <Box direction="row" background="white" justify="start" align="stretch" elevation="medium">
        <Box justify="center" align="stretch" alignContent="stretch" >
          <Menu
            align="stretch"
            icon={<MenuIcon />}
            messages={{
              openMenu: 'Open Menu',
              closeMenu: 'Close Menu'
            }}
            items={links.reduce(this.mobileMenuReducer, [])}
          />
        </Box>
        <Box justify="center" align="center" fill="horizontal">
          <Heading align="center" color="brand" style={{ margin: '0' }}>
            Tracadence
          </Heading>
        </Box>
      </Box>
    )
  }
  render() {
    const { size } = this.props

    const headerBasedOnDisplay = size === 'xsmall' || size === 'small' ? this.renderHalfScreen() : this.renderFullScreen()

    return <React.Fragment>{headerBasedOnDisplay}</React.Fragment>
  }
}

export default withRouter(HeaderClass)
