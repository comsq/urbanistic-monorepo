import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from 'lodash';
import React, {useCallback}  from 'react';

import styles from './search.module.css'

interface IProps {
    value: string
    setQuery(test: string): void
}

const waitInMs = 300;

export default function CustomizedInputBase({ value, setQuery }: IProps) {
    const setValue = debounce(setQuery, waitInMs);

    const onChange = useCallback(event => {
        setValue(event.target.value);
    }, [setValue]);

    return (
        <Paper className={styles.search} elevation={1} square={true} >
            <SearchIcon className={styles.search__iconButton} />
            <InputBase
                type="search"
                defaultValue={value}
                className={styles.search__input}
                placeholder="Поиск"
                onChange={onChange}
            />
        </Paper>
    );
}
