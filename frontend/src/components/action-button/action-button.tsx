import Button, { ButtonProps } from '@material-ui/core/Button';

import React from 'react';

import styles from './action-button.module.css';

const ActionButton = (props: ButtonProps & { mix?: string }) => {
    const className = props.mix ? styles['action-button'] + ' ' + props.mix : styles['action-button'];

    return <Button className={className} {...props} />
};

export default ActionButton;
