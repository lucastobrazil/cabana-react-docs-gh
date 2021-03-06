import React from 'react';
import { Box, TextPrimitive, BodyText } from 'cabana-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Logo from './Logo';
import { SpectrumLogo, GitHubLogo } from './Svg';
import Hamburger from './Hamburger';

const StyledNavButton = styled(NavLink)`
    text-decoration: none;
    color: ${themeGet('colors.grey', 'grey')};
    padding: ${themeGet('space.1')}px;
    display: inline-block;

    &.is-active {
        color: ${themeGet('colors.primary')};
        border-bottom: 2px solid ${themeGet('colors.primary')};
    }
    &:hover {
        color: ${themeGet('colors.primary')};
    }
`;

const NavButton = props => (
    <StyledNavButton activeClassName="is-active" to={props.to} exact={props.exact}>
        <BodyText is="span" fontSize={['caption', 'body']}>
            {props.children}
        </BodyText>
    </StyledNavButton>
);

const IconLink = styled(Box)`
    &:hover {
        color: ${props => themeGet('colors.primary', 'purple')(props)};
    }
`;

IconLink.defaultProps = {
    is: 'a',
    color: 'grey',
};

const NavItems = () => (
    <React.Fragment>
        <NavButton to="/" exact mr={2}>
            Home
        </NavButton>
        <NavButton to="/guides" mr={2}>
            Guides
        </NavButton>
        {/* <NavButton to="/examples" mr={2}>
      Examples
    </NavButton> */}
        <NavButton to="/components">Components</NavButton>
    </React.Fragment>
);

class ToggleNav extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen() {
        return this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { isOpen } = this.state;
        return (
            <Box display={['block', 'none']} fontSize="h5">
                <Hamburger onClick={this.toggleOpen} isOpen={isOpen} />
                <Box
                    display={isOpen ? 'block' : 'none'}
                    boxShadow={100}
                    position="fixed"
                    top="72px"
                    left="0"
                    bg="white"
                    width="100%"
                    pb={1}
                >
                    <NavItems />
                </Box>
            </Box>
        );
    }
}

export default function Nav({ onThemeChange }) {
    return (
        <Box
            bg="background"
            style={{ boxSizing: 'border-box' }}
            p={2}
            top={0}
            boxShadow={20}
            position="fixed"
            height="72px"
            zIndex={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            is="nav"
        >
            <BodyText is="div" display="inline-block" color="grey" m={0} flex="1 2 auto">
                <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/">
                    <Box display="inline-flex" justifyContent="center" alignItems="center" bg="primary" p="6px" borderRadius="large" mr={1}>
                        <Logo size="16" />{' '}
                    </Box>
                    <TextPrimitive fontWeight="bold" color="darkGrey">
                        Cabana
                    </TextPrimitive>{' '}
                    React{' '}
                    <TextPrimitive fontSize="tiny" fontWeight="bold">
                        v1.1.1
                    </TextPrimitive>
                </NavLink>
            </BodyText>

            {/* {process.env.NODE_ENV !== 'production' ? (
          <div>
            <SmallText>Theme:</SmallText>
            <select onChange={onThemeChange} defaultValue="default">
              <option value="default">Default</option>
              <option value="dark">Dark</option>
              <option value="bain">Bain</option>
            </select>
          </div>
        ) : null} */}
            <Box display={['none', 'block']}>
                <NavItems />
            </Box>
            <IconLink mx={1} href="https://spectrum.chat/cabana-designsystem" target="_blank">
                <SpectrumLogo />
            </IconLink>
            <IconLink style={{ lineHeight: 1 }} href="https://github.com/lucastobrazil/cabana-react" target="_blank">
                <GitHubLogo />
            </IconLink>
            <ToggleNav />
        </Box>
    );
}
