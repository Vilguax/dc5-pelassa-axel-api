import React from 'react';

export async function getServerSideProps(context) {
    const { id } = context.params;
    let campaign = null;
    let error = null;

    try {
        const response = await fetch(`http://localhost:3001/api/campaigns/${id}`);
        if (!response.ok) {
            throw new Error(`An error occurred: ${response.statusText}`);
        }
        const data = await response.json();
        campaign = data.data;
    } catch (err) {
        error = err.message;
    }

    return {
        props: { campaign, error },
    };
}

const CampaignDetailPage = ({ campaign, error }) => {
    if (error) {
        return <div>Erreur : {error}</div>;
    }

    if (!campaign) {
        return <div>Aucune donnée de campagne disponible.</div>;
    }

    return (
        <div>
            <h1>{campaign.name}</h1>
            <p>{campaign.description}</p>
            <p>Date de début: {campaign.start_date}</p>
            <p>Date de fin: {campaign.end_date}</p>
            <p>Budget: {campaign.budget}€</p>
        </div>
    );
};

export default CampaignDetailPage;
