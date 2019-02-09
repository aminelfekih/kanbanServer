const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/stories', function(req, res) {
    res.send('hello')
})

app.listen(port, () => console.log(`Listening on port ${port}`));
