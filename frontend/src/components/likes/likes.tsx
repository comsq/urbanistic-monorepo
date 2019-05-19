import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { boundMethod } from 'autobind-decorator';
import React, { Component } from 'react';

import { ILikeRequest } from '../../redux/events/types';

import styles from './likes.module.css';

interface IProps {
    likesCount?: number | null;
    slug: string;
    likeEvent(payload: ILikeRequest): void;
}

class Likes extends Component<IProps> {
    public render() {
        const { likesCount } = this.props;

        if (typeof likesCount !== 'number') {
            return null;
        }

        return (
            <div className={styles.likes}>
                {likesCount ?
                    <Typography component="p" className={styles.likes__count} color="secondary">
                        {likesCount}
                    </Typography> : null}
                <IconButton aria-label="Add to favorites" onClick={this.onClick} color="secondary">
                    <FavoriteIcon />
                </IconButton>
            </div>
        );
    }

    @boundMethod
    private onClick() {
        const { slug, likeEvent } = this.props;

        likeEvent({ slug });
    }
}

export default Likes;
