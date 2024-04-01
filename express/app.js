const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const cookieOptions = {
        maxAge: 900000
    };
    const cookie = faker.address.country();
    res.cookie('sid', cookie, cookieOptions);
    res.send(`Cookies injected [${cookie}]`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
