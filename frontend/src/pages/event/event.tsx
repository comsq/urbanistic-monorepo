import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router';

import { IFetchEventRequest } from '../../redux/events/types';

import Event from '../../components/event';
import Layout from '../../components/layout';

interface IProps extends RouteComponentProps {
    slug: string;
    fetchEvent: (payload: IFetchEventRequest) => void;
}

class EventPage extends Component<IProps> {
    componentDidMount() {
        const { slug, fetchEvent } = this.props;

        fetchEvent({ slug });
    }

    public render() {
        const { slug, history } = this.props;

        return (
            <Layout customHeader={<div />}>
                <Event history={history} slug={slug} />
            </Layout>
        )
    }
}

export default EventPage;
