import React from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router';

import { IApiError } from '../../common/types/error';
import { IEvent } from '../../common/types/event';
import { ITag } from '../../common/types/tag';
import slugToColorIcon from '../../utils/slugToColorIcon';

import BackArrow from '../back-arrow';
import GoButton from '../go-button';
import Likes from '../likes';
import Loading from '../loading';
import SimilarEvents from './similarEvents';

import styles from './event.module.css';

interface IProps {
    event?: IEvent,
    history: RouteComponentProps['history'];
    fetchEventStarted: boolean;
    fetchEventError: IApiError | null;
}

const Event = (props: IProps) => {
    const { event, history, fetchEventStarted, fetchEventError } = props;

    if (fetchEventStarted) {
        return <Loading />;
    }

    if (!event || fetchEventError) {
        return null;
    }

    const color = slugToColorIcon(event.slug);
    const title = `Куда пойдём? - ${event.title}`;

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="og:title" content={title} />
                <meta name="description" content={event.description} />
                <meta name="og:description" content={event.description} />
                <meta name="og:image" content={event.image} />
            </Helmet>
            <img
                className={styles.event__image}
                src={event.image}
                alt={event.title}
                title={event.title}
                height={260}
            />
            <ul className={styles.event__tags}>
                {event.tags.map((tag: ITag) => (
                    <li key={tag.slug} className={styles.event__tag}>
                        {tag.title}
                    </li>
                ))}
            </ul>
            <h1 className={styles.event__title}>
                {event.title}
            </h1>
            <p className={styles.event__description} style={{ color }}>
                {event.description}
            </p>
            <div className={styles.event__controls}>
                <GoButton slug={event.slug} />
                <Likes slug={event.slug} />
            </div>
            {event.participantsCount ? (
                <p className={styles.event__participants}>
                    Идут на мероприятие: {event.participantsCount}
                </p>
            ) : null}
            {event.maxParticipantsCount ? (
                <p className={styles.event__participants}>
                    Максимальное число участников: {event.maxParticipantsCount}
                </p>
            ) : null}
            <SimilarEvents similarWith={event.similarWith} />
            <BackArrow history={history} />
        </>
    );
};

export default Event;
