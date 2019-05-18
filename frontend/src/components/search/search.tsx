import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';
import React  from 'react';

import styles from './search.module.css'

interface IProps {
    findEventsList(): void
}

const waitInMs = 300;

export default function CustomizedInputBase({ findEventsList }: IProps) {
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
