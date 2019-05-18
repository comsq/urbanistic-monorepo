import React, {useCallback, useEffect, useState} from 'react';
import SmallCard from '../../components/card/smallCard';
import { useQueryParam, StringParam } from 'use-query-params';
import { DispatchProps, StateProps } from './index';
import Layout from '../../components/layout';
import Search from '../../components/search';
import styles from './main.module.css';

interface CardsListProps extends StateProps, DispatchProps {};

const COUNT_CARD = 5;


const Main: React.FC<CardsListProps> = ({ events, count, fetchEvents, loadingEvent }) => {
    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useQueryParam('search', StringParam);

    const loadMore = useCallback(() => {
        fetchEvents({ limit: COUNT_CARD, offset, search: search || '' });
        setOffset(offset + COUNT_CARD);
    }, [search]);

    const loadAgain = useCallback(() => {
        fetchEvents({ limit: COUNT_CARD, offset: 0, search: search || '', reset: true });
        setOffset(offset + COUNT_CARD);
    }, [search]);

    const setQuery = useCallback((text: string) => {
        setSearch(text);
        loadAgain();
    }, [loadAgain]);

    const handleScroll = useCallback(() => {
        if (count > offset) {
            if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.scrollHeight - 200) {
                loadMore()
            }
        }
    }, [loadMore])

    useEffect(() => {
        handleScroll()

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll])


    useEffect(() => {
        loadAgain()
    }, [loadAgain]);

    return (
        <Layout>
            <Search value={search || ''} setQuery={setQuery}/>
            {events && events.map(event => (
                <SmallCard
                    key={event.slug}
                    slug={event.slug}
                    title={event.title}
                    date={event.date}
                    image={event.image}
                    description={event.description}
                    tags={event.tags}
                    likesCount={event.likesCount}
                />
            ))}
            {loadingEvent ? <p className={styles.loading}>Loading ...</p> : null}
        </Layout>
    )
};

export default Main
