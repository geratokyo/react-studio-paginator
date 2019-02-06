import * as React from 'react';
import { Reducer } from './Reducer';
import { AppProps, inAppState, WINDOW_VIEWS, inAppInitialState, AppInitState, AppState } from './StateAndProps';
import { ACTIONS, TYPES } from './Actions';
import * as _ from 'lodash';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import SplashPage from '../../pages/Splashpage/Splashpage';

export const STATE_KEY = 'app';

class App extends React.Component<AppProps, inAppState>{
    constructor(props:AppProps) {
        super(props);
        this.state = inAppInitialState;
    }

    componentDidMount(){
    }

    render() {
        let state = this.state,
            props = this.props;
        return (
            <div className={`app`}>
                <Router hashType="noslash">
                    <Switch>
                        <Route exact path="/" component={SplashPage} />
                    </Switch>
                </Router>
            </div>
        );
    }
};

function mapStateToProps(state: any, ownProps) {
    return {
        appState: state.app
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({loadData: ACTIONS.DATA_LOADED}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);