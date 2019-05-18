import React from 'react';
import SmallCard from '../../common-components/Card/SmallCard';

const testData = {
    title: 'Shri mp and Chorizo Paella',
    date: 'September 14, 2016',
    image: '',
    description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    filters: [{
        id: '1',
        name: 'Sport',
    }, {
        id: '2',
        name: 'Free',
    }],
    countLikes: 54,
}

const CardsList = () => (
    <div>
        <SmallCard
            title={testData.title}
            date={testData.date}
            image={testData.image}
            description={testData.description}
            filters={testData.filters}
            countLikes={testData.countLikes}
        />
    </div>
);

export default CardsList
