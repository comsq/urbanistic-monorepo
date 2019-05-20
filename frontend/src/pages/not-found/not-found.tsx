import React from 'react'
import Layout from '../../components/layout';
import styles from './not-found.module.css';
import LogoWithOutWord from '../../components/layout/header/logo-without-words';



const NotFound = () => (<Layout>
    <div className={styles.noEvents}>
        <p className={styles.noEventsText}>404 Not Found</p>
        <LogoWithOutWord height="100%" width="100%"/>
    </div>
</Layout>)

export default NotFound
