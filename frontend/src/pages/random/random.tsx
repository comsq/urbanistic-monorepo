import React, { Component } from 'react'
import Shake from 'shake.js';
import CanvasLayout from './canvasLayout';


interface IProps {
}

interface IStateWithoutShake {
    canListen: false,
    randomVariant: string
}

interface IStateWithShake {
    canListen: true,
    randomVariant: string,
    myShakeEvent: Shake
}

type IState = IStateWithoutShake | IStateWithShake;

export default class Random extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        if (window.hasOwnProperty('DeviceMotionEvent')) {
            this.state = {
                canListen: true,
                randomVariant: '',
                myShakeEvent: new Shake({
                    threshold: 15,
                    timeout: 1000
                })
            };
            this.state.myShakeEvent.start();
            window.addEventListener('shake', this.shakeEventDidOccur, false);
        } else {
            this.state = {
                canListen: false,
                randomVariant: ''
            };
        }
    }

    componentWillUnmount(): void {
        if (this.state.canListen) {
            this.state.myShakeEvent.stop();
        }
    }

    shakeEventDidOccur = () => {
        this.setState({randomVariant: Math.floor(Math.random() * 101).toString()});
    };

    render() {
        return <CanvasLayout />;
        if (!this.state.canListen) {
            return (
                <div>
                    Ваш браузер не поддерживает тряску
                </div>
            )
        }
        if (this.state.randomVariant) {
            return (
                <div>
                    Рандомное событие: ${this.state.randomVariant}
                    Если вам не понравилось, потрясите телефон ещё раз
                </div>
            )
        }

        return (
            <div>
                Потрясите телефон, чтобы выбрать событие
            </div>
        )
    }
}
