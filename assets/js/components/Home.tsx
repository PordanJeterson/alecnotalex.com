import * as React from 'react';
import {Component} from 'react';
import {withStyles} from "@material-ui/core";

import homeStyle from './HomeStyle';

interface HomeProps {
    classes: any
}

class Home extends Component<HomeProps, {}> {

    public render(): JSX.Element {
        const {classes} = this.props;
        console.log(classes);
        return (
            <div className={classes.root}>
                test
            </div>
        )
    }
}

export default withStyles(homeStyle)(Home);