const express = require('express');
const app = express();
const PORT = process.env.PORT || 1337;

app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'});
});


app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'});
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
