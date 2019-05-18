import { boundMethod } from 'autobind-decorator';
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';

import styles from './back-arrow.module.css';

interface IProps {
    history: RouteComponentProps['history'];
}

class BackArrow extends Component<IProps> {
    public render() {
        return (
            <div className={styles['back-arrow']} onClick={this.onClick} role="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
                    <path fill="none" d="M0 0h24v24H0z" />
                </svg>
            </div>
        );
    }

    @boundMethod
    private onClick() {
        const { history } = this.props;

        history.goBack();
    }
}

export default BackArrow;
