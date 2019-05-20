import React, {Component} from 'react';
import styles from './checkbox-icon.module.css';
import slugToIcon from '../../../utils/slug-to-icon';
import slugToColorIcon from '../../../utils/slug-to-color-icon';
import classnames from 'classnames';

type Props = {
    slug: string,
    title: string,
    checked: boolean
}

export default class CheckboxIcon extends Component<Props> {
    render() {
        const {title, slug, checked} = this.props;
        const classNames = classnames(styles.theme, {
            [styles.checked]: checked
        });
        const icon = slugToIcon(slug);
        const color = slugToColorIcon(slug);
        const defaultColor = '#fff';
        const style = checked ? {backgroundColor: color, borderColor: color, color: defaultColor} : {color};
        return <div style={style} className={classNames}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.title}>{title}</div>
        </div>;
    }
}
