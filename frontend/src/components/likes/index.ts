import { connect } from 'react-redux';

import { RootState } from '../../redux/types';

import Likes from './likes';
import { likeEvent } from '../../redux/events/actions';

interface IOwnProps {
    slug: string;
}

const mapStateToProps = (state: RootState, ownProps: IOwnProps) => {
    const { slug } = ownProps;
    const { likesCount = 0 } = state.events.eventsMap[slug] || {};

    return {
        slug,
        likesCount
    };
};

const mapDispatchToProps = {
    likeEvent: likeEvent.request
};

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
