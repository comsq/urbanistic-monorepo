import { connect } from 'react-redux';

import { RootState } from '../../redux/types';

import {
    selectEvent,
    selectEventFetchStarted,
    selectEventFetchError
} from '../../redux/selectors/event';

import Event from './event';

interface IOwnProps {
    slug: string;
}

const mapStateToProps = (state: RootState, ownProps: IOwnProps) => ({
    event: selectEvent(state, ownProps.slug),
    fetchEventStarted: selectEventFetchStarted(state),
    fetchEventError: selectEventFetchError(state)
});

export default connect(mapStateToProps, undefined)(Event);
