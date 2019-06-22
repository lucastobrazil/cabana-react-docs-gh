import React from 'react';
import styled from 'styled-components';
import { Button } from 'cabana-react';
import { themeGet } from '@styled-system/theme-get';
import { IconChevronDownOutline } from 'cabanaico';

const Hamburger = styled(({ isOpen, ...restProps }) => <Button {...restProps} />)`
    color: ${props => themeGet('colors.primary', 'purple')(props)};
    opacity: 0.8;
    transition: all 350ms ease;
    transform: ${props => (props.isOpen ? `rotate(180deg)` : null)};
    font-size: inherit;

    &:hover {
        opacity: 1;
    }
    &:focus {
        outline: none;
    }
`;

Hamburger.defaultProps = {
    bg: 'transparent',
    boxShadow: 'none',
    px: 1,
    children: <IconChevronDownOutline />,
};

export default Hamburger;
