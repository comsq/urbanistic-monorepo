import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import styles from './likes.module.css';

interface IProps {
    likesCount?: number | null;
    onClick?(): void;
}

const Likes = ({ likesCount, onClick }: IProps) => {
    if (typeof likesCount !== 'number') {
        return null;
    }

    return (
        <div className={styles.likes}>
            <Typography component="p" className={styles.likes__count}>
                {likesCount}
            </Typography>
            <IconButton aria-label="Add to favorites" onClick={onClick}>
                <FavoriteIcon />
            </IconButton>
        </div>
    );
};

export default Likes;
