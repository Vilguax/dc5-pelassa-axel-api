'use client';

import React, { useEffect, useState } from 'react';
import CampaignsById from '../../components/campaignsById';

const CampaignDetailPage = () => {
  const [campaignId, setCampaignId] = useState(null);

  useEffect(() => {
    const id = new URL(window.location.href).pathname.split('/')[3];
    setCampaignId(id);
  }, []);

  if (!campaignId) return <div>Chargement...</div>;

  return <CampaignsById campaignId={campaignId} />;
};

export default CampaignDetailPage;
