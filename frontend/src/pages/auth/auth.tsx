import React from 'react';

import ActionButton from '../../components/action-button';
import Layout from '../../components/layout';
import BackHeader from '../tags/backHeader';

import styles from './auth.module.css';
import fb from './fb.svg';
import vk from './vk.svg';
import gh from './gh.svg';

interface IAuthProps {

}

export default function Auth(props: IAuthProps) {
    return (
        <Layout customHeader={<BackHeader text="регистрация"/>}>
            <div className={styles.buttons}>
                <ActionButton mix={styles.fb}><img src={fb} alt="fb"/>&nbsp;&nbsp;&nbsp;&nbsp;через Facebook</ActionButton>
                <ActionButton mix={styles.vk}><img src={vk} alt="vk"/>&nbsp;&nbsp;через Вконтакте</ActionButton>
                <ActionButton mix={styles.gh}><img src={gh} alt="gh"/>&nbsp;&nbsp;&nbsp;через GitHub</ActionButton>
            </div>
        </Layout>
    );
}
