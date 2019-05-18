import React from 'react'
import Themes from '../../components/themes';
import slugs from "../../constants/slugs";
import Layout from "../../components/layout";
const themes = [
    {title: 'спорт', slug: slugs.sport},
    {title: 'шоппинг', slug: slugs.shopping},
    {title: 'культура', slug: slugs.culture},
    {title: 'детям', slug: slugs.children},
    {title: 'еда', slug: slugs.food},
    {title: 'мастер классы', slug: slugs.masterClasses},
    {title: 'волонтёрство', slug: slugs.volunteerism}
];

export default function Filters() {
    return <Layout >
        <Themes themes={themes}/>
    </Layout>
}
