import React, { Component } from 'react'
import Shake from 'shake.js';

import BackHeader from '../tags/backHeader';

import CanvasLayout from './canvasLayout';
import ActionButton from '../../components/action-button';
import Layout from '../../components/layout';
import SmallCard from '../../components/card/smallCard';

import styles from './random.module.css';

interface IProps { }

interface IStateWithoutShake {
    canListen: false,
    randomVariant: any,
    isSleep: boolean
}

interface IStateWithShake {
    canListen: true,
    randomVariant: any,
    myShakeEvent: Shake,
    isSleep: boolean
}

type IState = IStateWithoutShake | IStateWithShake;

export default class Random extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        if (window.hasOwnProperty('DeviceMotionEvent')) {
            this.state = {
                canListen: true,
                randomVariant: undefined,
                myShakeEvent: new Shake({
                    threshold: 15,
                    timeout: 1000
                }),
                isSleep: false
            };
            this.state.myShakeEvent.start();
            window.addEventListener('shake', this.shakeEventDidOccur, false);
        } else {
            this.state = {
                canListen: false,
                randomVariant: undefined,
                isSleep: false
            };
        }
    }

    componentWillUnmount(): void {
        if (this.state.canListen) {
            this.state.myShakeEvent.stop();
        }
    }

    getRandom = () => {
        return fetch('http://w-t-g-b.herokuapp.com/events/random/', { method: 'GET' });
    };

    shakeEventDidOccur = () => {
        if (!this.state.isSleep) {
            this.setState({ isSleep: true, randomVariant: undefined });
            this.getRandom()
                .then(data => data.json())
                .then(data => {
                    this.setState({ randomVariant: data })
                });
            setTimeout(() => {
                this.setState({ isSleep: false })
            }, 300);
        }
    };

    render() {
        if (!this.state.randomVariant || this.state.isSleep) {
            return (
                <Layout customHeader={<BackHeader text={'рандомайзер'}/>}>
                    <div className={styles.random_wrapper}>
                        <CanvasLayout isSleep={this.state.isSleep} isUpper={true}/>
                        <div className={styles.center}>
                            <div>Потряси телефон!</div>
                            <ActionButton onClick={this.shakeEventDidOccur}>
                                Потрясти
                            </ActionButton>
                        </div>
                        <CanvasLayout isSleep={this.state.isSleep} isUpper={false}/>
                    </div>
                </Layout>
            );
        }
        return (
            <Layout customHeader={<BackHeader text={'рандомайзер'}/>}>
                <div className={styles.text}>Сегодня ты пойдёшь...</div>
                <SmallCard
                    key={this.state.randomVariant.slug}
                    slug={this.state.randomVariant.slug}
                    title={this.state.randomVariant.title}
                    date={this.state.randomVariant.date}
                    image={this.state.randomVariant.image}
                    description={this.state.randomVariant.description}
                    tags={this.state.randomVariant.tags}
                    likesCount={this.state.randomVariant.likesCount}
                />
                <div className={styles.wrapper__picture}>
                    <svg onClick={() => this.setState({ isSleep: false, randomVariant: undefined })} className={styles.cursor_pointer} width="160" height="48" viewBox="0 0 160 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="160" height="48" rx="24" fill="url(#paint0_linear)"/>
                        <path d="M65.2617 24.085H59.7158V28.6201H66.1582V30H58.0283V17.2031H66.0703V18.5918H59.7158V22.7051H65.2617V24.085ZM69.6826 20.4902V28.6729H73.1631V20.4902H74.7891V28.6729H78.2607V20.4902H79.8955V28.6729H81.2314L81.0732 32.8213H79.6143V30H68.0479V20.4902H69.6826ZM86.9443 30.1758C85.6553 30.1758 84.6064 29.7539 83.7979 28.9102C82.9893 28.0605 82.585 26.9268 82.585 25.5088V25.21C82.585 24.2666 82.7637 23.4258 83.1211 22.6875C83.4844 21.9434 83.9883 21.3633 84.6328 20.9473C85.2832 20.5254 85.9863 20.3145 86.7422 20.3145C87.9785 20.3145 88.9395 20.7217 89.625 21.5361C90.3105 22.3506 90.6533 23.5166 90.6533 25.0342V25.7109H84.2109C84.2344 26.6484 84.5068 27.4072 85.0283 27.9873C85.5557 28.5615 86.2236 28.8486 87.0322 28.8486C87.6064 28.8486 88.0928 28.7314 88.4912 28.4971C88.8896 28.2627 89.2383 27.9521 89.5371 27.5654L90.5303 28.3389C89.7334 29.5635 88.5381 30.1758 86.9443 30.1758ZM86.7422 21.6504C86.0859 21.6504 85.5352 21.8906 85.0898 22.3711C84.6445 22.8457 84.3691 23.5137 84.2637 24.375H89.0273V24.252C88.9805 23.4258 88.7578 22.7871 88.3594 22.3359C87.9609 21.8789 87.4219 21.6504 86.7422 21.6504ZM105.041 25.3506C105.041 26.7979 104.71 27.9639 104.048 28.8486C103.386 29.7334 102.489 30.1758 101.358 30.1758C100.204 30.1758 99.2959 29.8096 98.6338 29.0771V33.6562H97.0078V20.4902H98.4932L98.5723 21.5449C99.2344 20.7246 100.154 20.3145 101.332 20.3145C102.475 20.3145 103.377 20.7451 104.039 21.6064C104.707 22.4678 105.041 23.666 105.041 25.2012V25.3506ZM103.415 25.166C103.415 24.0938 103.187 23.2471 102.729 22.626C102.272 22.0049 101.646 21.6943 100.849 21.6943C99.8643 21.6943 99.126 22.1309 98.6338 23.0039V27.5479C99.1201 28.415 99.8643 28.8486 100.866 28.8486C101.646 28.8486 102.264 28.541 102.721 27.9258C103.184 27.3047 103.415 26.3848 103.415 25.166ZM112.986 30C112.893 29.8125 112.816 29.4785 112.758 28.998C112.002 29.7832 111.1 30.1758 110.051 30.1758C109.113 30.1758 108.343 29.9121 107.739 29.3848C107.142 28.8516 106.843 28.1777 106.843 27.3633C106.843 26.373 107.218 25.6055 107.968 25.0605C108.724 24.5098 109.784 24.2344 111.149 24.2344H112.731V23.4873C112.731 22.9189 112.562 22.4678 112.222 22.1338C111.882 21.7939 111.381 21.624 110.719 21.624C110.139 21.624 109.652 21.7705 109.26 22.0635C108.867 22.3564 108.671 22.7109 108.671 23.127H107.036C107.036 22.6523 107.203 22.1953 107.537 21.7559C107.877 21.3105 108.334 20.959 108.908 20.7012C109.488 20.4434 110.124 20.3145 110.815 20.3145C111.911 20.3145 112.77 20.5898 113.391 21.1406C114.012 21.6855 114.334 22.4385 114.357 23.3994V27.7764C114.357 28.6494 114.469 29.3438 114.691 29.8594V30H112.986ZM110.288 28.7607C110.798 28.7607 111.281 28.6289 111.738 28.3652C112.195 28.1016 112.526 27.7588 112.731 27.3369V25.3857H111.457C109.465 25.3857 108.469 25.9688 108.469 27.1348C108.469 27.6445 108.639 28.043 108.979 28.3301C109.318 28.6172 109.755 28.7607 110.288 28.7607ZM122.136 23.0918C122.136 22.6465 121.966 22.2949 121.626 22.0371C121.286 21.7734 120.82 21.6416 120.229 21.6416C119.654 21.6416 119.174 21.791 118.787 22.0898C118.406 22.3887 118.216 22.7402 118.216 23.1445H116.599C116.599 22.3184 116.944 21.6416 117.636 21.1143C118.327 20.5869 119.191 20.3232 120.229 20.3232C121.342 20.3232 122.209 20.5635 122.83 21.0439C123.451 21.5186 123.762 22.1982 123.762 23.083C123.762 23.5107 123.633 23.9033 123.375 24.2607C123.117 24.6182 122.751 24.9023 122.276 25.1133C123.384 25.4883 123.938 26.2266 123.938 27.3281C123.938 28.2012 123.601 28.8926 122.927 29.4023C122.253 29.9121 121.354 30.167 120.229 30.167C119.133 30.167 118.228 29.9004 117.513 29.3672C116.804 28.8281 116.449 28.1016 116.449 27.1875H118.066C118.066 27.6504 118.271 28.0488 118.682 28.3828C119.098 28.7109 119.613 28.875 120.229 28.875C120.85 28.875 121.351 28.7314 121.731 28.4443C122.112 28.1572 122.303 27.7852 122.303 27.3281C122.303 26.7949 122.142 26.4141 121.819 26.1855C121.503 25.9512 121.008 25.834 120.334 25.834H118.708V24.4629H120.475C121.582 24.4336 122.136 23.9766 122.136 23.0918ZM127.866 26.3877H126.398L126.284 17.2031H127.989L127.866 26.3877ZM126.223 29.1826C126.223 28.9189 126.302 28.6992 126.46 28.5234C126.624 28.3418 126.864 28.251 127.181 28.251C127.497 28.251 127.737 28.3418 127.901 28.5234C128.065 28.6992 128.147 28.9189 128.147 29.1826C128.147 29.4463 128.065 29.666 127.901 29.8418C127.737 30.0117 127.497 30.0967 127.181 30.0967C126.864 30.0967 126.624 30.0117 126.46 29.8418C126.302 29.666 126.223 29.4463 126.223 29.1826Z" fill="white"/>
                        <path d="M46 20L42 24H45C45 27.31 42.31 30 39 30C37.99 30 37.03 29.75 36.2 29.3L34.74 30.76C35.97 31.54 37.43 32 39 32C43.42 32 47 28.42 47 24H50L46 20ZM33 24C33 20.69 35.69 18 39 18C40.01 18 40.97 18.25 41.8 18.7L43.26 17.24C42.03 16.46 40.57 16 39 16C34.58 16 31 19.58 31 24H28L32 28L36 24H33Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear" x1="15.3846" y1="9.60009" x2="32.0492" y2="68.0722" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#00A1B5"/>
                                <stop offset="1" stopColor="#1B16EA"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </Layout>
        )
    }
}
