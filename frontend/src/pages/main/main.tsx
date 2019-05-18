import React, { useEffect, useState } from 'react';

import { IEvent } from '../../common/types/event';
import { IFetchItemsRequest } from '../../redux/events/types';

import SmallCard from '../../components/card/smallCard';
import Layout from '../../components/layout';
import Search from '../../components/search';

interface IProps {
    events: IEvent[];
    count: number;
    fetchEvents(props: IFetchItemsRequest): void;
}

const COUNT_CARD = 5;

const CardsList: React.FC<IProps> = ({ events, count, fetchEvents }) => {
    const [offset, setOffset] = useState(0);
    const [height, setHeight] = useState(0);

    const loadMore = () => {
        fetchEvents({ limit: COUNT_CARD, offset });
        setOffset(offset + COUNT_CARD);
    };


    useEffect(() => {
        const handleScroll = () => {
            if (count > offset) {
                if (window.innerHeight + document.documentElement.scrollTop > height - 300) {
                    setHeight(document.documentElement.scrollHeight);
                    loadMore();
                }
            }
        };
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);

        }
    }, []);


    useEffect(() => {
        loadMore();
    }, []);


    return (
        <Layout>
            <Search findEventsList={() => {
                console.log('search')
            }}/>
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
        </Layout>
    )
};

export default CardsList
