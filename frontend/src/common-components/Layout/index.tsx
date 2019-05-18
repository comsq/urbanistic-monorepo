import React, {ReactNode} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import styles from './Layout.module.css';

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
)

export default Layout
