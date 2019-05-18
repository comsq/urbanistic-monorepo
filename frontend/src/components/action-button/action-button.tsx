import Button, { ButtonProps } from '@material-ui/core/Button';

import React from 'react';

import styles from './action-button.module.css';

const ActionButton = (props: ButtonProps) => (
    <Button className={styles['action-button']} {...props} />
);

export default ActionButton;
