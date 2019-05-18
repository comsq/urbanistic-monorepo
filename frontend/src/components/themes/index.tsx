import React, {Component} from 'react';
import CustomCheckbox from "./customCheckbox";
import styles from './themes.module.css';

type Props = {
    themes: Array<{title: string, slug: string}>
}
export default class Themes extends Component<Props> {
    render() {
        const {themes} = this.props;
        return <div className={styles.themes}>
            {themes.map(theme => <CustomCheckbox slug={theme.slug} title={theme.title} />)}
        </div>;
    }
}
