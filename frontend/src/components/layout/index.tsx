import React, { ReactNode } from 'react';
import Header from './header';

import styles from './layout.module.css';

type Props = {
    children: ReactNode
    customHeader?: ReactNode

}

const Layout: React.FC<Props> = ({ children, customHeader }) => (
    <div className={styles.layoutWrapper}>
        {customHeader || <Header/>}
        <div className={styles.layout_content}>
            {children}
        </div>
    </div>
);

export default Layout
