const express = require('express');
const app = express();

const path = require('path');


const PORT = process.env.PORT || 3000;        // port configured for heroku or local port

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});