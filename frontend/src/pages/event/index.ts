import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { fetchEvent } from '../../redux/events/actions';
import { RootState } from '../../redux/types';

import EventPage from './event';

const mapStateToProps = (state: RootState, ownProps: RouteComponentProps) => {
    const { match } = ownProps;
    const { slug } = match.params as any;

    return { slug };
};

const mapDispatchToProps = {
    fetchEvent: fetchEvent.request
};

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
