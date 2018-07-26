import * as React from 'react';
import {Component, Fragment} from 'react';
import {withStyles, AppBar} from "@material-ui/core";

import homeStyle from './HomeStyle';

interface HomeProps {
    classes: any
}

class Home extends Component<HomeProps, {}> {

    public render(): JSX.Element {
        const {classes} = this.props;
        return (
            <Fragment >
                <AppBar>
                    Test
                </AppBar>
                <div className={classes.root}>
                    test
                </div>
            </Fragment>
        )
    }
}

export default withStyles(homeStyle)(Home);