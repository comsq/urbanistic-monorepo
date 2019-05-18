import React, { ReactNode } from 'react';

import styles from './layout.module.css';

type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
    <div className={styles.layoutWrapper}>
        <div className={styles.layout_content}>
            {children}
        </div>
    </div>
);

export default Layout
