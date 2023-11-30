import React, { useState, useEffect } from 'react';
import styles from './style/CampaignsById.module.css';

const CampaignsById = ({ campaignId }) => {
    const [campaign, setCampaign] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!campaignId) return;
        const fetchCampaign = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/campaigns/${campaignId}`);
                if (!response.ok) {
                    throw new Error(`Erreur lors de la requête fetch pour la campagne ${campaignId}`);
                }
                const data = await response.json();
                setCampaign(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCampaign();
    }, [campaignId]);

    if (loading) return <div>Chargement ...</div>;
    if (error) return <div>Erreur : {error}</div>;
    if (!campaign) return <div>Aucune donnée de campagne disponible.</div>;

    return (
        <div className={styles.container}>
            {loading ? (
                <div>Chargement...</div>
            ) : error ? (
                <div className={styles.error}>Erreur : {error}</div>
            ) : (
                <>
                    <div className={styles.header}>
                        <h1>Nom de la campagne</h1>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.details}>
                            <span className={styles.label}>Nom :</span> {campaign?.name}
                        </div>
                        <div className={styles.details}>
                            <span className={styles.label}>Description :</span> {campaign?.description}
                        </div>
                        <div className={styles.details}>
                            <span className={styles.label}>Budget :</span> {campaign?.budget} €
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CampaignsById;
