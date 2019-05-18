import { IEventsStore } from "../../redux/events/types";
import CardsList from './main';
import { connect, ResolveThunks } from "react-redux";
import { fetchEvents } from '../../redux/events/actions';

interface SubStore {
    events: IEventsStore
}

const mapDispatchToProps = {
    fetchEvents: fetchEvents.request
};

const mapStateToProps = ({ events }: SubStore) => ({ events: events.items, count: events.count, loadingEvent: events.fetchItemsStarted })

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ResolveThunks<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(CardsList)
