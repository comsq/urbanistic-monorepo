import React, { useCallback, useEffect, useState } from 'react';
import { useQueryParam, StringParam, encodeDelimitedArray, decodeDelimitedArray } from 'use-query-params';

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
import LogoWithOutWord from '../../components/layout/header/LogoWithoutWords';
import GenerateCard from '../../components/card/generateCard';

const CommaArrayParam = {
    encode: (array: string[] | null | undefined) =>
        encodeDelimitedArray(array, ','),

    decode: (arrayStr: string | string[] | null | undefined) =>
        decodeDelimitedArray(arrayStr, ',')
};

interface IProps {
    count: number;
    events: IEvent[];
    loadingEvent: boolean;
    fetchEvents(payload: IFetchItemsRequest): void;
    fetchTags(payload: {}): void;
    selectedTags: ITag[];
}

const COUNT_CARD = 5;

const Main: React.FC<IProps> = ({
    events,
    count,
    loadingEvent,
    fetchEvents,
    fetchTags,
    selectedTags,
}) => {
    useEffect(() => {
        fetchTags({})
    }, [fetchTags]);

    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useQueryParam('search', StringParam);
    const [tags, setTags] = useQueryParam('tags', CommaArrayParam);

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
            tags: selectedTags.map((tag: any) => tag.slug),
        });
        setOffset(COUNT_CARD);
    }, [search, fetchEvents]);

    if (selectedTags.some((tag: ITag) => !(tags || []).includes(tag.slug))) {
        setTags(Array.from(new Set((tags||[]).concat(selectedTags.map((tag: ITag) => tag.slug)))));
        loadAgain();
    }

    const setQuery = useCallback((text: string) => {
        setSearch(text);
        loadAgain();
    }, [loadAgain, setSearch]);

    const handleScroll = useCallback(() => {
        const heightOffset = window.innerHeight + document.documentElement.scrollTop;
        const scrollOffset = document.documentElement.scrollHeight - 200;

        if (count > offset && heightOffset > scrollOffset && !loadingEvent) {
            loadMore();
        }
    }, [count, offset, loadingEvent, loadMore]);

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
            <GenerateCard />
            {selectedTags.length ? <div className={styles.filters}>
                <div className={styles.chooseFilter}>Выбранные фильтры:</div>
                {selectedTags.map((selectedTag: any) => {
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
            {events.length ? events.map(event => (
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
            )) :
                <div className={styles.noEvents}>
                    <p className={styles.noEventsText}>К сожалению, не найдено ни одной организации.</p>
                    <LogoWithOutWord height="100%" width="100%"/>
                </div>
            }
            {loadingEvent ? <Loading /> : null}
        </Layout>
    )
};

export default Main;

