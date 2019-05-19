import React, {Component} from 'react'

const W = window.innerWidth / 2;
const H = window.innerHeight;
const mainWord = "кудасходить";
const letterInX = 18;
const letterInY = 20;
// const shiftOnX = Math.floor(W / 2 + (W / 2 - letterInX * mainWord.length) / (mainWord.length + 1));
const shiftOnX = 20;
const betweenLetter = shiftOnX;
const letterColor = '#162fe1';
const fontSizeLetter = 32;
const fontSizeText= 48;
const phrase = 'Потряси телефон';

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
    for (let x = 0, indexLetter = 0;
         indexLetter < mainWord.length;
         x += letterInX + betweenLetter, indexLetter++) {
        for (let y = (betweenLetter / 2**0.5 - letterInY / 2) * (indexLetter % 2);
             y < canvas.height - letterInY;
             y += letterInY + betweenLetter) {
            letters.push(createFlyingLetter(x, y, mainWord[indexLetter]));
        }
    }
    return letters;
}

function insertText(ctx: any) {
    ctx.beginPath();
    ctx.font = fontSizeText + "px Roboto";
    ctx.transition = "all 2s ease";
    ctx.fillStyle = letterColor;
    ctx.fillText(phrase, W / 2 - 352 /2, H / 2);
    ctx.fill();
    ctx.stroke();
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

function moveLetters(ctx: any, letters: any, stepInMs=10, timeout=3330, duration=1000, alpha=1) {
    const cb = () => {
        redrawLetters(ctx, letters, alpha);
        timeout -= stepInMs;
        alpha -= 1 / 333;
        if (timeout > 0) {
            setTimeout(cb, stepInMs);
        }
    };
    redrawLetters(ctx, letters, alpha);
    insertText(ctx);
    // setTimeout(cb, duration);
}

function initialization(canvas: any) {
    const ctx = canvas.getContext("2d");
    canvas.width = W;
    canvas.height = H;
    const letters = createLetters(canvas);
    moveLetters(ctx, letters);

    return canvas;
}

interface IState {
}

interface IProps {
}

export default class CanvasLayout extends Component<IProps, IState> {

    myRef: any;

    constructor(props: IProps) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount(): void {
        initialization(this.myRef.current);
    }

    render() {
        return <canvas ref={this.myRef} />
    }
}
