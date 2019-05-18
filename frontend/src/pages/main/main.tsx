import React, {Component} from 'react'
import Layout from "../../components/layout";
import {connect} from 'react-redux';
import {ITag} from "../../common/types/tag";

type Props = {
    selectedTags: Array<ITag>
}
class Main extends Component<Props> {
    render() {
        console.info(this.props.selectedTags);
        return <>
            <Layout>
                главная страница
                выбранные фильтры:
                {this.props.selectedTags.map(selectedTag => {
                    return <div key={selectedTag.slug}>{selectedTag.title}</div>
                })}
            </Layout>

        </>
    }
}

function mapStateToProps(state: any) {
    const {selectedSlugs, items: tags} = state.tags;
    const selectedTags = Array.from(selectedSlugs).map(slug => tags.find((tag: ITag)=> tag.slug === slug));
    return {
        selectedTags
    };
}
export default connect(mapStateToProps)(Main)
