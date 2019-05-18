import { connect } from 'react-redux';

import { IEventsStore } from '../../redux/events/types';
import { fetchEvents } from '../../redux/events/actions';

import Events from './events';

interface SubStore {
    events: IEventsStore
}

const mapDispatchToProps = {
    fetchEvents: fetchEvents.request
};

const mapStateToProps = ({ events }: SubStore) => {
    return {
        events: events.items,
        fetchStarted: events.fetchItemsStarted,
        fetchError: events.fetchItemsError
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events)
