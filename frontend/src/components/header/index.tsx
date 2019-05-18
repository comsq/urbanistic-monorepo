import React, {Component} from 'react';
import styles from './header.module.css';
import FilterList from '@material-ui/icons/FilterList';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.text}>
                    <Link to={'/'}>
                        Куда<br />пойдем?
                    </Link>
                </div>
                <div className={styles.rightBlock}>
                    <Link to={'/filters'}>
                        <div onClick={this.onFilterClick} className={styles.filterIcon}>
                            <FilterList fontSize="inherit" />
                        </div>
                    </Link>
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
