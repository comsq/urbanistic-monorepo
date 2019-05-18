import React  from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';
import styles from './Search.module.css'

type Props = {
    findEventsList(): void
}

const waitInMs = 300;

export default function CustomizedInputBase({ findEventsList }: Props) {
    return (
        <Paper className={styles.search} elevation={1} square={true} >
            <SearchIcon className={styles.search__iconButton} />
            <InputBase
                className={styles.search__input}
                placeholder="Поиск"
                onChange={debounce(findEventsList, waitInMs)}
            />
        </Paper>
    );
}
