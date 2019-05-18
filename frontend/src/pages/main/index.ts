import { connect, } from 'react-redux';

import { IEventsStore } from '../../redux/events/types';
import { fetchEvents } from '../../redux/events/actions';

import CardsList from './main';

interface SubStore {
    events: IEventsStore
}

const mapDispatchToProps = {
    fetchEvents: fetchEvents.request
};

const mapStateToProps = ({ events }: SubStore) => ({
    events: events.items,
    count: events.count,
    loadingEvents: events.fetchItemsStarted
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList)
