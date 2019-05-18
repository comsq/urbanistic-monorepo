import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import React from 'react';

import styles from './loading.module.css';

const Loading = (props: CircularProgressProps) => (
    <div className={styles.loading}>
        <CircularProgress {...props} />
    </div>
);

export default Loading;
