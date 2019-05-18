import React, {Component} from 'react';
import styles from './header.module.css';
import { FilterList } from '@material-ui/icons';
import { AccountCircle } from '@material-ui/icons';

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.text}>Куда<br />пойдем?</div>
                <div className={styles.rightBlock}>
                    <div onClick={this.onFilterClick} className={styles.filterIcon}><FilterList fontSize="inherit" /></div>
                    <div onClick={this.onProfileClick} className={styles.profileIcon}><AccountCircle fontSize="inherit" /></div>
                </div>
            </header>
        );
    }

    onFilterClick = () => {
        console.info('click on filter');
    };

    onProfileClick = () => {
        console.info('click on profile');
    }
}
