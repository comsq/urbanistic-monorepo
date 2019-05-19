import React, {Component} from 'react';
import styles from './header.module.css';
import FilterList from '@material-ui/icons/FilterList';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from './Logo';
import {tagsUrl, authUrl} from '../../../urls/client';
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo />
                <div className={styles.rightBlock}>
                    <Link to={tagsUrl.template} >
                        <div className={styles.filter}>
                            <FilterList fontSize="inherit" className={styles.filterIcon}/>
                        </div>
                    </Link>
                    <Link to={authUrl.template} >
                        <div className={styles.profile}>
                            <AccountCircle fontSize="inherit" className={styles.profileIcon}/>
                        </div>
                    </Link>
                </div>
            </header>
        );
    }

    onProfileClick = () => {
        console.info('click on profile');
    }
}
