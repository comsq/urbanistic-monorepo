import { connect } from 'react-redux';

import { RootState } from '../../redux/types';
import { participate } from '../../redux/events/actions';
import { selectEvent } from '../../selectors/event';

import GoButton from './go-button';

interface IOwnProps {
    slug: string;
}

const mapStateToProps = (state: RootState, ownProps: IOwnProps) => {
    const { slug } = ownProps;
    const event = selectEvent(state, slug) || {};

    return {
        slug,
        isParticipant: event.isParticipant,
        maxParticipantsCount: event.maxParticipantsCount,
        participantsCount: event.participantsCount,
        participationRequested: state.events.participationRequested,
        participationError: state.events.participationError
    };
};

const mapDispatchToProps = {
    participate: participate.request
};

export default connect(mapStateToProps, mapDispatchToProps)(GoButton);
