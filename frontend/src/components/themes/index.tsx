import React, { Component } from 'react';

import Theme from './theme';

import styles from './themes.module.css';

type Props = {
    themes?: Array<{title: string, slug: string}>;
}
export default class Themes extends Component<Props> {
    render() {
        const { themes } = this.props;

        if (!themes || themes.length === 0) {
            return null;
        }

        return (
            <div className={styles.themes}>
                {themes.map(theme => <div className={styles.theme} key={theme.slug}>
                    <Theme slug={theme.slug} title={theme.title} />
                </div>)}
            </div>
        );
    }
}
