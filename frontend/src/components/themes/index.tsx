import React, {Component} from 'react';
import CustomCheckbox from "./customCheckbox";
import styles from './themes.module.css';

type Props = {
    themes?: Array<{title: string, slug: string}>
}
export default class Themes extends Component<Props> {
    render() {
        const { themes } = this.props;

        if (!themes || themes.length === 0) {
            return null;
        }

        return (
            <div className={styles.themes}>
                {themes.map(theme => (
                    <CustomCheckbox
                        key={theme.slug}
                        slug={theme.slug}
                        title={theme.title}
                    />
                ))}
            </div>
        );
    }
}
