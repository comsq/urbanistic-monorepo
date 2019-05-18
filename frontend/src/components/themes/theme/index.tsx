import React, {Component} from 'react';
import Checkbox from "@material-ui/core/Checkbox";
import CheckboxIcon from '../checkboxIcon';
import {connect} from 'react-redux';
import {selectTags} from "../../../redux/tags/actions";

type Props = {
    slug: string,
    title: string,
    selectTags: any
}
type State = {
    checked: boolean
}

class Theme extends Component<Props, State> {
    state = {
        checked: false
    };
    render() {
        const {title, slug} = this.props;
        const {checked} = this.state;
        const icon = <CheckboxIcon checked={checked} slug={slug} title={title} />;
        return <Checkbox onChange={this.onChange} checkedIcon={icon} icon={icon} />;
    }

    onChange = (event: any, checked: boolean) => {
        this.setState({checked});
        const {slug, selectTags} = this.props;
        selectTags({slug, checked});
    }
}

function mapStateToProps() {return {}}
function mapDispatchToProps(dispatch: any) {
    return {selectTags: ({slug, checked}: {slug: string, checked: boolean}) => dispatch(selectTags({slug, checked}))}
}
export default connect(mapStateToProps, mapDispatchToProps)(Theme);
