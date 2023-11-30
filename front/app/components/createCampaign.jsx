import React, { useState } from 'react';
import styles from './style/createCampaign.module.css';

const CreateCampaign = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/api/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, budget }),
        });

        if (response.ok) {
            window.location.href = '/';
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.formTitle}>Création de campagne</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="name" className={styles.inputLabel}>Nom de la campagne</label>
                <input
                    className={styles.inputField}
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="description" className={styles.inputLabel}>Description de la campagne</label>
                <input
                    className={styles.inputField}
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="budget" className={styles.inputLabel}>Budget de la campagne</label>
                <input
                    className={styles.inputField}
                    type="text"
                    name="budget"
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                />
                <button type="submit" className={styles.submitButton}>Créer la campagne</button>
            </form>
        </div>
    );
}

export default CreateCampaign;