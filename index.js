const express = require('express');
const path = require('path');

const app = express();

const publicDir = 'C:/Sources/public';

app.use(express.static(publicDir));

app.get('/*', function (req, res) {
  res.sendFile(path.join(publicDir + '/index.html'));
});

const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('Server running at port ' + port)
});

