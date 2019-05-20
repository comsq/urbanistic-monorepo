import React from 'react';
import GenerateCardIcon from './generate-card-icon';
import styles from './generate-card.module.css';
import { Link } from 'react-router-dom';

const GenerateCard = ({}) => (
    <Link to="random">
        <div className={styles.card}>
            <GenerateCardIcon width="100%" height="100%" />
        </div>
    </Link>
);

export default GenerateCard;
