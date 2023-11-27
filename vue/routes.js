const express = require('express');
const routes = express.Router();
const campagnesController = require('../controllers/campagnesController');

routes.get('/api/campaigns', campagnesController.getAllCampaigns);
routes.get('/api/campaigns/:id', campagnesController.getCampaignById);
routes.post('/api/campaigns', campagnesController.createCampaign);
routes.delete('/api/campaigns/:id', campagnesController.deleteCampaign);

module.exports = routes;