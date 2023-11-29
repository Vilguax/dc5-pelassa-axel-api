'use client';

import React, { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard';
import styles from './style/Feed.module.css';

const Feed = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/api/campaigns')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Serveur API indisponible ');
                }
                return response.json();
            })
            .then(data => {
                setCampaigns(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching campaigns:', error);
                setError('Failed to fetch campaigns');
                setLoading(false);
            });            
    }, []);

    if (loading) {
        return <div>Chargement ...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <div className={styles.feed}>
            <div className={styles.feedTitle}>
                <h2>Nombre de campagnes : {campaigns.length}</h2>
            </div>
            <div className={styles.cardsContainer}>
                {campaigns.map(campaign => (
                    <CampaignCard key={campaign.id} {...campaign} />
                ))}
            </div>
        </div>
    );
}

export default Feed;