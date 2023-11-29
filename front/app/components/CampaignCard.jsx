import Link from 'next/link';
import React from 'react';
import styles from './style/CampaignCard.module.css';

const CampaignCard = ({ id, name, description, budget }) => {
    return (
        <div className={styles.card}>
            <h3>Nom : {name}</h3>
            <p>ID: {id}</p>
            <p>Description : {description}</p>
            <p>Budget: {budget} €</p>
            <Link href={`/campaigns/${id}`} passHref>
                <button className={styles.viewButton}>Voir la campagne</button>
            </Link>
        </div>
    );
}

export default CampaignCard;