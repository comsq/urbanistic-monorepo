import React from 'react';

import { IEvent } from '../../../common/types/event';

import Card from '../../card/small-card';

import styles from './similar-events.module.css';

interface IProps {
    similarWith: IEvent['similarWith']
}

const SimilarEvents = ({ similarWith }: IProps) => {
    if (!similarWith || similarWith.length === 0) {
        return null;
    }

    return (
        <div className={styles.similarEvents}>
            <h2 className={styles.similarEvents__title}>
                Возможно, тебя это заинтересует
            </h2>
            <ul className={styles.similarEvents__list}>
                {similarWith.map(similarEvent => (
                    <li
                        className={styles.similarEvents__item}
                        key={similarEvent.slug}
                    >
                        <Card {...similarEvent} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SimilarEvents;
