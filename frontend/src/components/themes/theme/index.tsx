import React, {Component} from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import CheckboxIcon from '../checkboxIcon';
import {connect} from 'react-redux';
import {selectTags} from "../../../redux/tags/actions";
import {SubStore} from "../../../pages/main";

type Props = {
    slug: string,
    title: string,
    selectTags: any,
    selectedSlugs: Set<string>
}
type State = {
    checked: boolean
}

class Theme extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const {selectedSlugs} = props;
        const checked = Array.from(selectedSlugs).includes(props.slug);
        this.state = {
            checked
        }
    }

    render() {
        const {title, slug} = this.props;
        const {checked} = this.state;
        const icon = <CheckboxIcon checked={checked} slug={slug} title={title} />;
        return <Checkbox checked={checked} onChange={this.onChange} checkedIcon={icon} icon={icon} />;
    }

    onChange = (event: any, checked: boolean) => {
        this.setState({checked});
        const {slug, selectTags} = this.props;
        selectTags({slug, checked});
    }
}

export interface SelectTags {
    slug: string
    checked: boolean
}


function mapStateToProps(state: SubStore) {
    const {selectedSlugs} = state.tags;

    return {selectedSlugs};
}
function mapDispatchToProps(dispatch: any) {
    return {selectTags: ({slug, checked}: SelectTags) => dispatch(selectTags({slug, checked}))}
}
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
