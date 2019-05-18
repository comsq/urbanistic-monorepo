import React, {Component} from 'react';
import styles from './header.module.css';
import FilterList from '@material-ui/icons/FilterList';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.text}>
                    Куда<br />пойдем?
                </div>
                <div className={styles.rightBlock}>
                    <div onClick={this.onFilterClick} className={styles.filter}>
                        <FilterList fontSize="inherit" className={styles.filterIcon}/>
                    </div>
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
