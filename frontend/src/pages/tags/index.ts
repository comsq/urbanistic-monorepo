import { IEventsStore } from "../../redux/events/types";
import Tags from './tags';
import { connect, ResolveThunks } from "react-redux";
import { fetchTags } from '../../redux/tags/actions';

interface SubStore {
    tags: IEventsStore
}

const mapDispatchToProps = {fetchTags: fetchTags.request};

const mapStateToProps = ({ tags }: SubStore) => {
    return { tags: tags.items }
};

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ResolveThunks<typeof mapDispatchToProps>

export default connect(mapStateToProps, mapDispatchToProps)(Tags)
