import React, { useEffect } from 'react';
import SmallCard from '../../common-components/card/smallCard';
import { DispatchProps, StateProps } from './index';

interface CardsListProps extends StateProps, DispatchProps {}

const CardsList: React.FC<CardsListProps> = ({ events, fetchEvents }) => {

    useEffect(() => {
        fetchEvents({ limit: 2, offset: 0 })
    }, []);

    return (
        <>
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
        </>
)};

export default CardsList
