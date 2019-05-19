import React, {Component} from 'react'

const W = document.body.clientWidth / 2;
const H = (window.innerHeight - 89 - 60) / 2 - 100;
const mainWord = "кудасходить";
const letterInX = 18;
const letterInY = 20;
const shiftOnX = Math.floor((W - letterInX * mainWord.length) / (mainWord.length + 1));
const shiftOnY = shiftOnX;
const betweenLetter = shiftOnX;
const letterColor = '#162fe1';
const fontSizeLetter = 32;

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface ILetter {
    speed: any,
    location: any,
    color: string,
    font: any,
    letter: string
}
function createFlyingLetter(x: number, y: number, letter: string): ILetter {
    return {
        speed: {
            x: -2.5 + Math.random() * 5,
            y: -2.5 + Math.random() * 5
        },
        location: {x, y},
        color: letterColor,
        font: {
            size: fontSizeLetter,
            family: 'Roboto'
        },
        letter: letter
    };
}

function createLetters(canvas: any) {
    const letters = [];
    for (let x = shiftOnX, indexLetter = 0;
         indexLetter < mainWord.length;
         x += letterInX + betweenLetter, indexLetter++) {
        for (let y = shiftOnY + (betweenLetter / 2**0.5 - letterInY / 2) * (indexLetter % 2);
             y < canvas.height - letterInY;
             y += letterInY + betweenLetter) {
            letters.push(createFlyingLetter(x, y, mainWord[indexLetter]));
        }
    }
    return letters;
}

function redrawLetters(ctx: any, letters: ILetter[], alpha: number) {
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, W, H);
    letters.forEach(function(p: ILetter) {
        ctx.beginPath();
        ctx.font = p.font.size + "px Roboto";
        ctx.globalAlpha = alpha;
        ctx.transition = "all 2s ease";
        ctx.fillStyle = p.color;
        ctx.fillText(p.letter, p.location.x, p.location.y);
        ctx.fill();
        ctx.stroke();
        p.location.x += p.speed.x;
        p.location.y += p.speed.y;
        p.speed.x += randomInt(-0.01, 0.01);
        p.speed.y += randomInt(-0.01, 0.01);
    });
}

function moveLetters(ctx: any, letters: any, stepInMs=10, timeout=3000, duration=1000, alpha=1) {
    const cb = () => {
        redrawLetters(ctx, letters, alpha);
        timeout -= stepInMs;
        alpha -= 1 / 300;
        if (timeout > 0) {
            setTimeout(cb, stepInMs);
        }
    };
    cb();
}

function initialization(canvas: any, isUpper: boolean) {
    canvas.style.position = 'relative';
    canvas.style.left = '50%';
    canvas.style.transform = 'translateX(-50%)';
    canvas.width = W;
    canvas.height = H;
    if (!isUpper) {
        canvas.style.top = '50%';
    }
    const ctx = canvas.getContext("2d");
    const letters = createLetters(canvas);
    redrawLetters(ctx, letters, 1);

    return { ctx, letters };
}

interface IState {
}

interface IProps {
    isUpper: boolean,
    isSleep: boolean
}

export default class CanvasLayout extends Component<IProps, IState> {

    myRef: any;
    ctx: any;
    letters: any;

    constructor(props: IProps) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount(): void {
        const { ctx, letters } = initialization(this.myRef.current, this.props.isUpper);
        this.ctx = ctx;
        this.letters = letters;
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        if (nextProps.isSleep) {
            moveLetters(this.ctx, this.letters);
        }
        return true;
    }

    render() {
        return <canvas ref={this.myRef} />
    }
}
