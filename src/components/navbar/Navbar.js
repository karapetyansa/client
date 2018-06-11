import React, { Fragment, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import {
  Toolbar,
  Box,
  Flex,
  NavLink,
  Fixed,
  Container,
  Text,
  Hide,
  ButtonTransparent,
  Image
} from 'ui'

import User from './User'

const Links = ({ isOpen }) => (
  <Hide
    hidden={!isOpen && [true, false]}
    flexDirection={['column', 'row']}
    w={1}
  >
    <ButtonTransparent is={Link} mx={[0, 2]} to={'/links'}>
      Links
    </ButtonTransparent>
    <ButtonTransparent is={Link} mx={[0, 2]} to={'/tags'}>
      Tags
    </ButtonTransparent>
    <ButtonTransparent is={Link} mx={[0, 2]} to={'/users'}>
      Users
    </ButtonTransparent>
    <Box mx="auto" />
    <User />
  </Hide>
)
export class Navbar extends PureComponent {
  state = { isOpen: false }
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    const { brand } = this.props
    const { isOpen } = this.state
    return (
      <Fixed top={0} left={0} right={0}>
        <Toolbar>
          <Container
            is={Flex}
            w={1}
            flexDirection={['column', 'row']}
            alignItems={['stretch', 'center']}
            my={2}
            px={0}
          >
            <Flex>
              <ButtonTransparent is={Link} mx={0} to={'/'}>
                {brand}
              </ButtonTransparent>
              <Box mx="auto" />
              <Hide hidden={[false, true]} alignItems="center">
                <ButtonTransparent onClick={this.toggle}>
                  MENU
                </ButtonTransparent>
              </Hide>
            </Flex>
            <Links isOpen={isOpen} />
          </Container>
        </Toolbar>
      </Fixed>
    )
  }
}
