import React, { ReactNode } from 'react';
import Header from '../header';
import Footer from '../footer';

import styles from './layout.module.css';

type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
    <>
        <Header />
        <div className={styles.layout_content}>
            {children}
        </div>
        <Footer />
    </>
);

export default Layout
