import React, {useEffect, useState} from 'react';
import SmallCard from '../../components/card/smallCard';
import { DispatchProps, StateProps } from './index';
import Layout from '../../components/layout';
import Search from '../../components/search';
import styles from './main.module.css';

interface CardsListProps extends StateProps, DispatchProps {};

const COUNT_CARD = 5;


const Main: React.FC<CardsListProps> = ({ events, count, fetchEvents, loadingEvent }) => {
    const [offset, setOffset] = useState(0);

    const loadMore = () => {
        fetchEvents({ limit: COUNT_CARD, offset });
        setOffset(offset + COUNT_CARD);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (count > offset) {
                if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.scrollHeight - 200) {
                    loadMore()
                }
            }
        }

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    })


    useEffect(() => {
        loadMore()
    }, []);

    return (
        <Layout>
            <Search findEventsList={() => {
                console.log('search');
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
            {loadingEvent ? <p className={styles.loading}>Loading ...</p> : null}
        </Layout>
    )
};

export default Main
