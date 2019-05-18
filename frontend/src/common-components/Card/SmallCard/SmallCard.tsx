import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './SmallCard.module.css'

interface Filter {
    id: string
    name: string
}

interface EventProp {
    title: string
    date: string
    image: string
    description: string
    filters: Filter[]
    countLikes: number
}



const SmallCard: React.FC<EventProp> = ({ title, date, image, description, filters, countLikes }) => {

    return (
        <Card className={styles.smallCard_card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Avatar">
                        R
                    </Avatar>
                }
                title={title}
                subheader={date}
            />
            <CardMedia
                className={styles.smallCard_media}
                image={image}
            />
            <CardContent>
                <Typography component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardContent>
                <div className={styles.smallCard_actionBlock}>
                    <div className={styles.smallCard_filters}>
                        {filters.map(filter => (
                            <Link component="a" href={`/events?${filter.id}`}>
                                <Typography component="p" className={styles.smallCard_filter}>
                                    {filter.name}
                                </Typography>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.smallCard_likes}>
                        <Typography component="p" className={styles.smallCard_count_likes}>
                            {countLikes}
                        </Typography>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default SmallCard;
