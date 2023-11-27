module.exports = function(app, db) {
    app.get('/api', (req, res) => {
        res.json({"message": "Bienvenue sur l'API de gestion des campagnes publicitaires."});
    });
    
    app.get('/api/campaigns', (req, res) => {
        const sql = "SELECT * FROM campagnes";
        db.all(sql, [], (err, rows) => {
            if (err) {
                res.status(400).json({"erreur ": err.message});
                return;
            }
            res.json({
                "message": "succès ",
                "data": rows
            });
        });
    });
    
    app.get('/api/campaigns/:id', (req, res) => {
        const sql = "SELECT * FROM campagnes WHERE id = ?";
        const params = [req.params.id];
        db.get(sql, params, (err, row) => {
            if (err) {
                res.status(400).json({"erreur ": err.message});
                return;
            }
            res.json({
                "message": "succès ",
                "data": row
            });
        });
    });
    
    app.post('/api/campaigns', (req, res) => {
        const { name, description, start_date, end_date, budget } = req.body;
        const sql = `INSERT INTO campagnes (name, description, start_date, end_date, budget) VALUES (?, ?, ?, ?, ?)`;
        const params = [name, description, start_date, end_date, budget];
        db.run(sql, params, function (err) {
            if (err) {
                res.status(400).json({"erreur ": err.message});
                return;
            }
            res.json({
                "message": "succès ",
                "data": { id: this.lastID }
            });
        });
    });
    
    app.delete('/api/campaigns/:id', (req, res) => {
        const sql = 'DELETE FROM campagnes WHERE id = ?';
        const params = [req.params.id];
        db.run(sql, params, function (err) {
            if (err) {
                res.status(400).json({ "erreur ": res.message });
                return;
            }
            res.json({ "message": "suppression", rows: this.changes });
        });
    });
};