import React, { useEffect } from 'react';

import { IApiError } from '../../common/types/error';
import { IEvent } from '../../common/types/event';
import { IFetchItemsRequest } from '../../redux/events/types';

import Layout from '../../components/layout';
import Loading from '../../components/loading';
import SmallCard from '../../components/card/smallCard';

interface IProps {
    fetchStarted: boolean;
    fetchError: IApiError | null;
    events: Array<Partial<IEvent>>;
    fetchEvents(payload: IFetchItemsRequest): void;
}

const Events: React.FC<IProps> = ({ events, fetchEvents, fetchStarted, fetchError }) => {

    useEffect(() => {
        fetchEvents({ limit: 2, offset: 0 })
    }, []);

    if (fetchStarted) {
        return <Loading />;
    }

    if (!events || fetchError || events.length === 0) {
        return null;
    }

    return (
        <Layout>
            {events.map(event => (
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

export default Events;
