const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact1.html'); // send HTML file on GET request
});

app.use(express.static(__dirname));

app.post('/submit-form', (req, res) => {
    const passcode = req.body.passcode; // access form data
    // Add validation logic here
    res.send(`Welcome in Dr. Pydimarri.`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});