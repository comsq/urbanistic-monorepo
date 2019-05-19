import React, { useCallback, useEffect, useState } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';
import styles from './main.module.css';

import { IEvent } from '../../common/types/event';
import { ITag } from '../../common/types/tag';
import { IFetchItemsRequest } from '../../redux/events/types';

import SmallCard from '../../components/card/smallCard';
import Layout from '../../components/layout';
import Search from '../../components/search';
import Loading from '../../components/loading';
import slugToIcon from '../../utils/slugToIcon';
import slugToColorIcon from '../../utils/slugToColorIcon';

interface IProps {
    count: number;
    events: IEvent[];
    loadingEvents: boolean;
    fetchEvents(payload: IFetchItemsRequest): void;
    selectedTags: ITag[];
}

const COUNT_CARD = 5;

const Main: React.FC<IProps> = ({
    events,
    count,
    loadingEvents,
    fetchEvents,
    selectedTags,
}) => {
    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useQueryParam('search', StringParam);

    const loadMore = useCallback(() => {
        fetchEvents({
            limit: COUNT_CARD,
            offset,
            search: search || ''
        });
        setOffset(offset + COUNT_CARD);
    }, [search, fetchEvents, offset]);

    const loadAgain = useCallback(() => {
        fetchEvents({
            limit: COUNT_CARD,
            offset: 0,
            search: search || '',
            reset: true,
            tags: selectedTags.map(tag => tag.slug),
        });
        setOffset(COUNT_CARD);
    }, [search, fetchEvents]);

    const setQuery = useCallback((text: string) => {
        setSearch(text);
        loadAgain();
    }, [loadAgain, setSearch]);

    const handleScroll = useCallback(() => {
        const heightOffset = window.innerHeight + document.documentElement.scrollTop;
        const scrollOffset = document.documentElement.scrollHeight - 200;

        if (count > offset && heightOffset > scrollOffset && !loadingEvents) {
            loadMore();
        }
    }, [count, offset, loadingEvents]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        loadAgain();
    },[loadAgain]);

    return (
        <Layout>
            <Search value={search || ''} setQuery={setQuery}/>
            {selectedTags.length ? <div className={styles.filters}>
                <div className={styles.chooseFilter}>Выбранные фильтры:</div>
                {selectedTags.map(selectedTag => {
                    if (!selectedTag) {
                        return null;
                    }
                    return (
                        <div className={styles.tag} key={selectedTag.slug} style={{ color: slugToColorIcon(selectedTag.slug)}}>
                            <div className={styles.tagIcon}>{slugToIcon(selectedTag.slug)}</div>
                            {selectedTag.title}
                        </div>
                    )
                })}
            </div> : null}
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
            {loadingEvents && <Loading />}
        </Layout>
    )
};

export default Main;

