const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./dc5-pelassa-axel.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connecté à la db des campagnes.');
});

module.exports = db;