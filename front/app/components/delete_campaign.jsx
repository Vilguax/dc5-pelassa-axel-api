import React, { useState, useEffect } from 'react';
import styles from './style/createCampaign.module.css';

const DeleteCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState('');

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await fetch('http://localhost:3001/api/campaigns');
      const data = await response.json();
      setCampaigns(data.data || []);
    };

    fetchCampaigns();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedCampaign) {
      const response = await fetch(`http://localhost:3001/api/campaigns/${selectedCampaign}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCampaigns(campaigns.filter(campaign => campaign.id !== selectedCampaign));
        setSelectedCampaign('');
      } else {
        console.error('Échec de la suppression de la campagne');
      }
    }
};

  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Supprimer une campagne</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.inputLabel} htmlFor="campaign-select">Choisissez une campagne à supprimer :</label>
        <select
          className={styles.inputField}
          id="campaign-select"
          value={selectedCampaign}
          onChange={(e) => setSelectedCampaign(e.target.value)}
          required
        >
          <option value="">--Sélectionnez une campagne--</option>
          {campaigns.map((campaign) => (
            <option key={campaign.id} value={campaign.id}>
              {campaign.name}
            </option>
          ))}
        </select>
        <button className={styles.submitButton} type="submit">Supprimer</button>
      </form>
    </div>
  );
};

export default DeleteCampaign;
