import React from 'react';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './smallCard.module.css';
import { format } from 'date-fns';
import { IEventSmall } from '../../../common/types/event';


const SmallCard: React.FC<IEventSmall> = ({ title, date, image, description, tags, likesCount, slug }) => {

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
            <Link component="a" href={`/event/${slug}`}>
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
                            <Link component="a" href={`/events/${tag.slug}`}>
                                <Typography component="p" className={styles.smallCard_filter}>
                                    {tag.title}
                                </Typography>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.smallCard_likes}>
                        {likesCount && <Typography component="p" className={styles.smallCard_count_likes}>
                            {likesCount}
                        </Typography>}
                        <IconButton aria-label="Add to favorites" onClick={() => console.log('like')}>
                            <FavoriteIcon />
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default SmallCard;
