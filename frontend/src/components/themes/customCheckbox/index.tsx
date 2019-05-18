import Checkbox from '@material-ui/core/Checkbox';
import React, {Component} from 'react';

import CheckboxIcon from '../checkboxIcon';

type Props = {
    slug: string,
    title: string
}
type State = {
    checked: boolean
}

export default class CustomCheckbox extends Component<Props, State> {
    state = {
        checked: false
    };
    render() {
        const {title, slug} = this.props;
        const {checked} = this.state;
        const icon = <CheckboxIcon checked={checked} slug={slug} title={title} />;
        return <Checkbox onChange={this.onChange} checkedIcon={icon} icon={icon} />
    }

    onChange = (event: any, checked: boolean) => {
        this.setState({checked});
    }
}
