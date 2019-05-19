import React, {Component} from 'react'
import Themes from '../../components/themes';
import BackHeader from './backHeader';
import Layout from "../../components/layout";
import styles from './tags.module.css';
import {DispatchProps, StateProps} from "../tags";

interface TagsListProps extends StateProps, DispatchProps {}

export default class Tags extends Component<TagsListProps> {
    render() {
        return <div>
            <Layout customHeader={<BackHeader text={'фильтры'}/>}>
                <h3 className={styles.choiseThemes}>Выберите интересные темы:</h3>
                <Themes themes={this.props.tags}/>
            </Layout>
        </div>;
    }

    componentDidMount() {
        if (!this.props.tags || !this.props.tags.length) {
            this.props.fetchTags({});
        }
    }
}
