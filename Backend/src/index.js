//^ Aca se levanta el servidor de express
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});