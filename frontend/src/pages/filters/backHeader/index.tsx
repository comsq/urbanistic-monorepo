import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {indexUrl} from '../../../urls/client';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import styles from './header.module.css'

type Props = {
    text?: string,
    imagePath?: string
}
export default class BackHeader extends Component<Props> {
    render() {
        const {text, imagePath} = this.props;
        const style = imagePath ? {backgroundImage: `url(${imagePath})`} : {};

        return <div className={styles.backHeader} style={style}>
            <Link to={indexUrl.template}>
                <span className={styles.arrow}><ArrowBackIos color={"inherit"}/></span>
            </Link>
            {text && <div className={styles.text}>{text}</div>}
        </div>;
    }
}
