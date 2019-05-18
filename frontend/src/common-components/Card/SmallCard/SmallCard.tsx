import React from 'react';
import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styles from './SmallCard.modules.css'

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
}


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const SmallCard: React.FC<EventProp> = ({ title, date, image, description, filters }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                title={title}
                subheader={date}
            />
            <CardMedia
                className={classes.media}
                image={image}
            />
            <CardContent>
                <Typography component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <div className={styles.smallCard_actionBlock} >
                    <div>
                        {filters.map(filter => {
                            <Typography component="p">
                                {filter.name}
                            </Typography>
                        })}
                    </div>
                    <div>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                    </div>
                </div>
            </CardActions>
            <CardActions className={classes.actions} disableActionSpacing>

                {/*<IconButton aria-label="Share">*/}
                    {/*<ShareIcon />*/}
                {/*</IconButton>*/}
            </CardActions>
        </Card>
    );
}

export default SmallCard;
