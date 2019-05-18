import React from 'react';

import { IApiError } from '../../common/types/error';
import { IEvent } from '../../common/types/event';
import { ITag } from '../../common/types/tag';

import ActionButton from '../action-button';
import Likes from '../likes';
import Loading from '../loading';
import SimilarEvents from './similarEvents';

import styles from './event.module.css';
import slugToColorIcon from '../../utils/slugToColorIcon';

interface IProps {
    event?: IEvent,
    fetchEventStarted: boolean;
    fetchEventError: IApiError | null;
    onSubscribe?(): void;
}

const Event = (props: IProps) => {
    const { event, fetchEventStarted, fetchEventError, onSubscribe } = props;

    if (fetchEventStarted) {
        return <Loading />;
    }

    if (!event || fetchEventError) {
        return null;
    }

    const color = slugToColorIcon(event.slug);

    return (
        <>
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
                <ActionButton onClick={onSubscribe}>
                    Я иду!
                </ActionButton>
                <Likes likesCount={event.likesCount} />
            </div>
            <SimilarEvents similarWith={event.similarWith} />
        </>
    );
};

export default Event;
