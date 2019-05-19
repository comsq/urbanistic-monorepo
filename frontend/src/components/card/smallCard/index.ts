import SmallCard from './smallCard'
import { connect } from 'react-redux';
import { selectTags } from '../../../redux/tags/actions';


export default connect(null, { selectTags })(SmallCard)