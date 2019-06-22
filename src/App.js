import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Box } from 'cabana-react';
import { ThemeProvider } from 'styled-components';

import cabanaDefaultTheme, { darkTheme } from './docsTheme';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Loading from './components/Loading';

const ComponentLibrary = lazy(() => import('./pages/ComponentLibrary'));
const Home = lazy(() => import('./pages/Home'));
const Guides = lazy(() => import('./pages/Guides'));

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            theme: cabanaDefaultTheme,
        };
    }

    chooseTheme(value) {
        switch (value) {
            case 'dark':
                return darkTheme;
            default:
                return cabanaDefaultTheme;
        }
    }

    toggleTheme(e) {
        const value = e.target.value;
        this.setState({ theme: this.chooseTheme(value) });
    }

    render() {
        return (
            <Router>
                <ThemeProvider theme={this.state.theme}>
                    <Box is="main" bg="background" pt={72}>
                        <Nav onThemeChange={this.toggleTheme.bind(this)} />
                        <Switch>
                            <Suspense fallback={<Loading />}>
                                <Route component={props => <Home {...props} />} exact path="/" />
                                <Route component={props => <Guides {...props} />} path="/guides" />
                                <Route component={props => <ComponentLibrary {...props} />} path="/components" />
                            </Suspense>
                        </Switch>
                        <Footer />
                    </Box>
                </ThemeProvider>
            </Router>
        );
    }
}
export default App;
