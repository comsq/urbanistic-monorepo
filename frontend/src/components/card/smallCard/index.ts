import SmallCard from './smallCard'
import { connect } from 'react-redux';
import { selectTags } from '../../../redux/tags/actions';
import {SelectTags} from "../../themes/theme";

function mapDispatchToProps(dispatch: any) {
    return {selectTags: ({slug, checked}: SelectTags) => dispatch(selectTags({slug, checked}))}
}

export default connect(null, mapDispatchToProps )(SmallCard)