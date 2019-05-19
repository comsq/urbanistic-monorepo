import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom'

import { IEvent } from '../../../common/types/event';
import {eventUrl, indexUrl} from '../../../urls/client';

import Likes from '../../likes';

import styles from './smallCard.module.css';


export interface SelectTags {
    selectTags: (item: any) => void;
}

interface Props extends Partial<IEvent>, SelectTags  {

}

const SmallCard: React.FC<Props> = ({
    title,
    date,
    image,
    description,
    tags = [],
    likesCount,
    slug = '',
    selectTags,
}) => {


    return (
        <Card className={styles.smallCard_card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Avatar">
                        R
                    </Avatar>
                }
                title={title}
                subheader={date ? format(date, 'D MMMM YYYY') : ''}
            />
            <Link component="a" href={eventUrl.build({ slug })}>
            <CardMedia
                className={styles.smallCard_media}
                image={image}
            /></Link>
            <CardContent>
                <Typography component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardContent>
                <div className={styles.smallCard_actionBlock}>
                    <div className={styles.smallCard_filters}>
                        {tags.map(tag => (
                            <RouterLink
                                to={indexUrl.template}
                                key={tag.slug}
                                className={styles.smallCard_filter}
                                onClick={() => { console.log(tag.slug); selectTags({ slug: tag.slug, checked: true }) }}>
                                <Typography component="p">
                                    {tag.title}
                                </Typography>
                            </RouterLink>
                        ))}
                    </div>
                    <Likes slug={slug} />
                </div>
            </CardContent>
        </Card>
    );
};

export default SmallCard;
