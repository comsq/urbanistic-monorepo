import { ITag } from '../../common/types/tag';

export interface ITagsStore {
    items: Array<ITag>;
    selectedSlugs: Set<string>
}
