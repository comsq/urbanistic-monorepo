import React, { useCallback, useEffect, useState } from 'react';
import { useQueryParam, StringParam } from 'use-query-params';

import { IApiError } from '../../common/types/error';
import { IEvent } from '../../common/types/event';
import { IFetchItemsRequest } from '../../redux/events/types';

import SmallCard from '../../components/card/smallCard';
import Layout from '../../components/layout';
import Search from '../../components/search';
import Loading from '../../components/loading';
import { ITag } from "../../common/types/tag";

interface IProps {
    count: number;
    events: IEvent[];
    loadingEvents: boolean;
    fetchEvents(payload: IFetchItemsRequest): void;
    selectedTags: (ITag | undefined)[];
}

const COUNT_CARD = 5;

const Main: React.FC<IProps> = ({
    events,
    count,
    loadingEvents,
    fetchEvents, selectedTags

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
    }, [search]);

    const loadAgain = useCallback(() => {
        fetchEvents({
            limit: COUNT_CARD,
            offset: 0,
            search: search || '',
            reset: true
        });
        setOffset(offset + COUNT_CARD);
    }, [search]);

    const setQuery = useCallback((text: string) => {
        setSearch(text);
        loadAgain();
    }, [loadAgain]);

    const handleScroll = useCallback(() => {
        const heightOffset = window.innerHeight + document.documentElement.scrollTop;
        const scrollOffset = document.documentElement.scrollHeight - 200;

        if (count > offset && heightOffset > scrollOffset) {
            loadMore();
        }
    }, [loadMore]);

    useEffect(() => {
        handleScroll()

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    useEffect(() => {
        loadAgain()
    }, [loadAgain]);

    return (
        <Layout>
            <Search value={search || ''} setQuery={setQuery}/>
            главная страница
            выбранные фильтры:
            {selectedTags.map(selectedTag => {
                if (!selectedTag) {
                    return null;
                }
                return <div key={selectedTag.slug}>{selectedTag.title}</div>
            })}
            {loadingEvents ? (
                <Loading />
            ) : events && events.map(event => (
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
        </Layout>
    )
};

export default Main;

