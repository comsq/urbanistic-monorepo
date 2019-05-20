import React, { useCallback, useEffect, useState } from 'react';
import { useQueryParam, StringParam, encodeDelimitedArray, decodeDelimitedArray } from 'use-query-params';

import styles from './main.module.css';

import { IEvent } from '../../common/types/event';
import { ITag } from '../../common/types/tag';
import { IFetchItemsRequest } from '../../redux/events/types';

import SmallCard from '../../components/card/small-card';
import Layout from '../../components/layout';
import Search from '../../components/search';
import Loading from '../../components/loading';
import slugToIcon from '../../utils/slug-to-icon';
import slugToColorIcon from '../../utils/slug-to-color-icon';
import LogoWithOutWord from '../../components/layout/header/logo-without-words';
import GenerateCard from '../../components/card/generate-card';
import {IAuthRequest, IAuthStorage} from "../../redux/session/types";

const CommaArrayParam = {
    encode: (array: string[] | null | undefined) =>
        encodeDelimitedArray(array, ','),

    decode: (arrayStr: string | string[] | null | undefined) =>
        decodeDelimitedArray(arrayStr, ',')
};

interface IProps {
    session: IAuthStorage,
    count: number;
    events: IEvent[];
    loadingEvent: boolean;
    fetchEvents(payload: IFetchItemsRequest): void;
    fetchTags(payload: {}): void;
    selectedTags: ITag[];
    authorize(payload: IAuthRequest): void;
}

const COUNT_CARD = 5;

let a = 0;

const Main: React.FC<IProps> = ({
    events,
    count,
    loadingEvent,
    fetchEvents,
    fetchTags,
    selectedTags,
    authorize,
    session
}) => {
    a++;

    useEffect(() => {
        fetchTags({})
    }, [fetchTags]);

    const [offset, setOffset] = useState(0);
    const [search, setSearch] = useQueryParam('search', StringParam);
    const [tags, setTags] = useQueryParam('tags', CommaArrayParam);
    const [code] = useQueryParam('code', StringParam);
    let [state] = useQueryParam('state', StringParam);

    if (code && !session.fetchEventStarted && !session.token && !session.fetchEventError) {
        state = state || 'vk-oauth2';

        authorize({ code, provider: state as any });
    }

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
            tags: selectedTags.map((tag: ITag) => tag.slug),
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
            )) : !loadingEvent && a !== 1 ? (
                <div className={styles.noEvents}>
                    <p className={styles.noEventsText}>К сожалению, не найдено ни одного события.</p>
                    <LogoWithOutWord height="100%" width="100%"/>
                </div>
            ) : null}
            {loadingEvent ? <Loading /> : null}
        </Layout>
    )
};

export default Main;

