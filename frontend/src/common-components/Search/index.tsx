import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '350px',
        height: '40px',
        borderRadius: '100px',
        marginLeft: '13px',
    },
    input: {
    },
    iconButton: {
        margin: '0 7px 0 16px',
        color: '#c4c4c4',
    },
};

type Props = {
    classes: any,
    findEventsList(): void
}

const waitInMs = 300;


function CustomizedInputBase(props: Props) {
    const { classes, findEventsList } = props;

    return (
        <Paper className={classes.root} elevation={1}>
            <SearchIcon className={classes.iconButton} />
            <InputBase className={classes.input} placeholder="Поиск" onChange={debounce(findEventsList, waitInMs)} />
        </Paper>
    );
}

export default withStyles(styles)(CustomizedInputBase);
