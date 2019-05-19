import { IEventsStore } from "../../redux/events/types";
import Main from './main';
import { connect } from 'react-redux';
import { authorize } from '../../redux/session/actions';
import { fetchEvents } from '../../redux/events/actions';
import { fetchTags } from '../../redux/tags/actions';
import { ITag } from '../../common/types/tag';
import { ITagsStore } from '../../redux/tags/types';
import {IAuthStorage} from "../../redux/session/types";

export interface SubStore {
    session: IAuthStorage
    events: IEventsStore
    tags: ITagsStore
}

const mapDispatchToProps = {
    authorize: authorize.request,
    fetchEvents: fetchEvents.request,
    fetchTags: fetchTags.request
};

const mapStateToProps = ({ events, tags, session }: SubStore) => ({
    session,
    events: events.items,
    count: events.count,
    loadingEvent: events.fetchItemsStarted,
    selectedTags: Array.from(tags.selectedSlugs).map(slug => tags.items.find((tag: ITag)=> tag.slug === slug)!)
});

export default connect(mapStateToProps, mapDispatchToProps)(Main)
