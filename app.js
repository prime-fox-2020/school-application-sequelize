// const express = require('express');
// const router = require('./routes/index');
// const PORT = 3000;
// const app = express();

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({extended: true}));

// app.use('/' , router);

// app.listen(PORT, () => console.log('Listening on port:', PORT));


    const data = JSON.parse(require('fs').readFileSync('./data/students.json', 'utf-8'));

    data.map(el => {
        el.createdAt = new Date();
        el.updatedAt = new Date();
    });

    console.log(data)