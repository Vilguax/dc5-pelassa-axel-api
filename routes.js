const campagnes = require('./models/campagnes');

module.exports = function(app) {
    app.get('/api', (req, res) => {
        res.json({"message": "Bienvenue sur l'API de gestion des campagnes publicitaires."});
    });

    app.get('/api/campaigns', async (req, res) => {
        try {
            const campaigns = await campagnes.findAll();
            res.json({"message": "succès ", "data": campaigns});
        } catch (err) {
            res.status(400).json({"erreur": err.message});
        }
    });

    app.get('/api/campaigns/:id', async (req, res) => {
        try {
            const campaign = await campagnes.findByPk(req.params.id);
            if (campaign) {
                res.json({"message": "succès ", "data": campaign});
            } else {
                res.status(404).json({"erreur": "Campagne non trouvée"});
            }
        } catch (err) {
            res.status(400).json({"erreur": err.message});
        }
    });

    app.post('/api/campaigns', async (req, res) => {
        try {
            const { name, description, startDate, endDate, budget } = req.body;
            const campaign = await campagnes.create({ name, description, startDate, endDate, budget });
            res.json({"message": "succès ", "data": { id: campaign.id }});
        } catch (err) {
            res.status(400).json({"erreur": err.message});
        }
    });

    app.delete('/api/campaigns/:id', async (req, res) => {
        try {
            const numDeleted = await campagnes.destroy({ where: { id: req.params.id } });
            if (numDeleted) {
                res.json({ "message": "suppression", rows: numDeleted });
            } else {
                res.status(404).json({"erreur": "Campagne non trouvée"});
            }
        } catch (err) {
            res.status(400).json({"erreur": err.message});
        }
    });
};