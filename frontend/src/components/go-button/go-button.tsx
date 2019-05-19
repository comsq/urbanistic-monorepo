import { boundMethod } from 'autobind-decorator';
import React, { Component } from 'react';

import { IApiError } from '../../common/types/error';
import { IParticipationRequest } from '../../redux/events/types';

import ActionButton from '../action-button';
import Loading from '../loading';

import styles from './go-button.module.css';

interface IProps {
    isParticipant: boolean;
    maxParticipantsCount: number | null;
    participantsCount: number | null;
    participationRequested: boolean;
    participationError: IApiError | null;
    slug: string;
    participate(payload: IParticipationRequest): void;
}

class GoButton extends Component<IProps> {
    public render() {
        const {
            isParticipant,
            maxParticipantsCount,
            participantsCount,
            participationRequested,
            participationError
        } = this.props;

        if (participationRequested && !participationError) {
            return (
                <div className={styles.loading}>
                    <Loading />
                </div>
            );
        }

        const isDisabled = Boolean(participantsCount &&
            maxParticipantsCount &&
            participantsCount > maxParticipantsCount
        );

        return (
            <ActionButton
                disabled={isDisabled}
                mix={isParticipant ? styles.active : ''}
                onClick={this.onClick}
            >
                Я пойду!
            </ActionButton>
        );
    }

    @boundMethod
    private onClick() {
        const { slug, participate } = this.props;

        participate({ slug });
    }
}

export default GoButton;
