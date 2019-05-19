import React from 'react';
import GenerateCardIcon from './generateCardIcon';
import styles from './generateCard.module.css';
import { Link } from 'react-router-dom';

const GenerateCard = ({}) => (
    <Link to="random">
        <div className={styles.card}>
            <GenerateCardIcon width="100%" height="100%" />
        </div>
    </Link>
);

export default GenerateCard;
