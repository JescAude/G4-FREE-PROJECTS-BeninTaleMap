const express = require('express');
const connection = require('./src/config/db');
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world !!');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
})

app.get('/villes', (req, res) => {
    const query = `
        SELECT name, origin, myths
        FROM city
    `;
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching cities:', err);
            return res.status(500).send('Internal Server Error');;
        }
        const villes = results.map(ville => ({
            name: ville.name,
            origin: ville.origin,
            description: `Ville de ${ville.name} fondée par des ${ville.origin}, elle est connue pour ses ${ville.myths}.`,
            myths: ville.myths
        }));
        res.status(200).json(villes);
    });
});

app.get('/villes/:id', (req, res) => {
    const name = req.params.id;
    const query = `
        SELECT name, origin, myths
        FROM city
        WHERE name = ?
    `;
    connection.query(query, [name], (err, results) => {
        if (err) {
            console.error('Error fetching city:', err);
            return res.status(500).send('Internal Server Error');
        }
        if (results.length === 0) {
            return res.status(404).send('City not found');
        }
        const ville = results[0];
        res.status(200).json({
            name: ville.name,
            origin: ville.origin,
            description: `Ville de ${ville.name} fondée par des ${ville.origin}, elle est connue pour ses ${ville.myths}.`,
            historique: `Histoire de ${ville.name}, située en ${ville.origin}.`
        });
    });
});