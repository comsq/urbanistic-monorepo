import React, {Component} from 'react';
import styles from './checkboxIcon.module.css';
import slugToIcon from '../../../utils/slugToIcon';
import slugToColorIcon from '../../../utils/slugToColorIcon';
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
            {icon}
            <div className={styles.title}>{title}</div>
        </div>;
    }
}
