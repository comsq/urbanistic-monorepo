import { IEventsStore } from "../../redux/events/types";
import Main from './main';
import { connect } from 'react-redux';
import { fetchEvents } from '../../redux/events/actions';
import { ITag } from '../../common/types/tag';
import { ITagsStore } from '../../redux/tags/types';

interface SubStore {
    events: IEventsStore
    tags: ITagsStore
}

const mapDispatchToProps = {
    fetchEvents: fetchEvents.request
};

const mapStateToProps = ({ events, tags }: SubStore) => ({
    events: events.items,
    count: events.count,
    loadingEvent: events.fetchItemsStarted,
    selectedTags: Array.from(tags.selectedSlugs).map(slug => tags.items.find((tag: ITag)=> tag.slug === slug))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
