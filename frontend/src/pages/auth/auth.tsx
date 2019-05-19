import React from 'react';

import ActionButton from '../../components/action-button';
import Layout from '../../components/layout';
import BackHeader from '../tags/backHeader';

import { vkUrl, ghUrl } from '../../urls/client';

import styles from './auth.module.css';
import vk from './vk.svg';
import gh from './gh.svg';
import ok from './ok.svg';

interface IAuthProps {

}

export default function Auth(props: IAuthProps) {
    return (
        <Layout customHeader={<BackHeader text="регистрация"/>}>
            <div className={styles.buttons}>
                <ActionButton mix={styles.vk} onClick={() => window.location = vkUrl.template as any}>
                    <img src={vk} alt="vk"/>&nbsp;&nbsp;через Вконтакте
                </ActionButton>
                <ActionButton mix={styles.ok}>
                    <img width="30" height="25" src={ok} alt="ok"/>&nbsp;&nbsp;через Одноклассники
                </ActionButton>
                <ActionButton mix={styles.gh} onClick={() => window.location = ghUrl.template as any}>
                    <img src={gh} alt="gh"/>&nbsp;&nbsp;&nbsp;через GitHub
                </ActionButton>
            </div>
        </Layout>
    );
}
