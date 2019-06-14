import cabanaDefaultTheme from './theme';

const darkTheme = {
    ...cabanaDefaultTheme,

    fonts: {
        default: '"Hind", sans-serif',
    },
    colors: {
        primary: 'pink',
        background: cabanaDefaultTheme.colors.darkGrey,
    },
};
export default cabanaDefaultTheme;
export { darkTheme };
