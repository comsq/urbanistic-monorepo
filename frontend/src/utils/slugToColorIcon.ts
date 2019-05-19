import slugs from '../constants/slugs';

export default function slugToColorIcon(slug: string) {
    switch (slug) {
        case slugs.sport: {
            return '#005DAA';
        }
        case slugs.children: {
            return '#d10048';
        }
        case slugs.culture: {
            return '#520063';
        }
        case slugs.masterClasses: {
            return '#23c9ed';
        }
        case slugs.food: {
            return '#ffb500';
        }
        case slugs.shopping: {
            return '#ec8525';
        }
        case slugs.volunteerism: {
            return '#2fbc80';
        }
        default: {
            return '#005DAA';
        }
    }
}
