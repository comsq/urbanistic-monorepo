import React, { useEffect } from 'react';
import SmallCard from '../../common-components/Card/SmallCard';
import { DispatchProps, StateProps } from './index';

interface CardsListProps extends StateProps, DispatchProps {}

const CardsList: React.FC<CardsListProps> = ({ events, fetchEvents }) => {

    useEffect(() => {
        console.log('test', fetchEvents)
        fetchEvents({ limit: 2, offset: 0 })
    }, []);

    return (
        <>
        {events.map(event => (
            <SmallCard
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
