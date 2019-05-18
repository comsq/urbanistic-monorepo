import React, {Component} from 'react';
import styles from './header.module.css';
import FilterList from '@material-ui/icons/FilterList';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from './Logo';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo />
                <div className={styles.rightBlock}>
                    <Link to="/filters" >
                        <div onClick={this.onFilterClick} className={styles.filter}>
                            <FilterList fontSize="inherit" className={styles.filterIcon}/>
                        </div>
                    </Link>
                    <div onClick={this.onProfileClick} className={styles.profile}>
                        <AccountCircle fontSize="inherit" className={styles.profileIcon}/>
                    </div>
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
